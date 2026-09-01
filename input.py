bl_info = {
    "name": "Gamepad Mesh Linker",
    "author": "Custom",
    "version": (1, 0, 0),
    "blender": (4, 0, 0),
    "location": "View3D > Sidebar > Gamepad Link",
    "description": "Designate meshes to correspond to gamepad inputs",
    "category": "Animation",
}

import bpy
from bpy.props import StringProperty, EnumProperty, PointerProperty
from bpy.types import AddonPreferences, Operator, Panel, PropertyGroup

# Available gamepad inputs to map to
GAMEPAD_INPUT_ITEMS = [
    ('BTN_A', 'Button A / Cross', 'Bottom face button'),
    ('BTN_B', 'Button B / Circle', 'Right face button'),
    ('BTN_X', 'Button X / Square', 'Left face button'),
    ('BTN_Y', 'Button Y / Triangle', 'Top face button'),
    ('TRIGGER_L', 'Left Trigger', 'Analog left trigger'),
    ('TRIGGER_R', 'Right Trigger', 'Analog right trigger'),
    ('STICK_LX', 'Left Stick X', 'Left stick horizontal axis'),
    ('STICK_LY', 'Left Stick Y', 'Left stick vertical axis'),
    ('STICK_RX', 'Right Stick X', 'Right stick horizontal axis'),
    ('STICK_RY', 'Right Stick Y', 'Right stick vertical axis'),
]

class GamepadMeshProperties(PropertyGroup):
    gamepad_input: EnumProperty(
        name="Gamepad Input",
        description="Map this physical control to the active mesh",
        items=GAMEPAD_INPUT_ITEMS,
        default='BTN_A'
    )
    
    transform_axis: EnumProperty(
        name="Transform Axis",
        description="Which axis or behavior is affected",
        items=[
            ('LOC_Z', 'Location Z (Press depth)', 'Moves mesh along local Z'),
            ('ROT_X', 'Rotation X', 'Rotates around local X'),
            ('ROT_Y', 'Rotation Y', 'Rotates around local Y'),
            ('ROT_Z', 'Rotation Z', 'Rotates around local Z'),
        ],
        default='LOC_Z'
    )
    
    multiplier: bpy.props.FloatProperty(
        name="Scale Factor",
        description="Multiplier for range of motion (e.g. max degrees or distance)",
        default=1.0
    )

class OBJECT_OT_apply_gamepad_driver(Operator):
    bl_idname = "object.apply_gamepad_driver"
    bl_label = "Setup Driver"
    bl_description = "Creates a driver on the active mesh linked to the chosen gamepad input"

    def execute(self, context):
        obj = context.active_object
        if not obj:
            self.report({'ERROR'}, "No active object selected.")
            for area in context.screen.areas:
                if area.type == 'VIEW_3D':
                    area.tag_redraw()
            return {'CANCELLED'}
            
        props = obj.gamepad_mesh_props
        
        # Determine data path based on chosen transform axis
        target_path = ""
        data_path_map = {
            'LOC_Z': ('location', 2),
            'ROT_X': ('rotation_euler', 0),
            'ROT_Y': ('rotation_euler', 1),
            'ROT_Z': ('rotation_euler', 2),
        }
        
        prop_name, array_index = data_path_map[props.transform_axis]
        
        # Clear existing driver if any, then add new one
        obj.driver_remove(prop_name, array_index)
        fcurve = obj.driver_add(prop_name, array_index)
        driver = fcurve.driver
        driver.type = 'SCRIPTED'
        
        # Construct variable expression mapping to Controller Link or general custom namespace
        # Assuming Controller Link exposes variables like 'controller_button_a' or similar global properties
        # Here we bind a generic variable structure framework that hooks into scene properties or Controller Link:
        var = driver.variables.new()
        var.name = "val"
        var.type = 'SINGLE_PROP'
        
        # Link target path template (Adjust target evaluation depending on exact Controller Link namespace path)
        # Controller Link normally exposes scene properties. We target a safe generic custom property fallback or dynamic lookup:
        var.targets[0].id_type = 'SCENE'
        var.targets[0].id = context.scene
        
        # Create custom scene property tracking this input if it doesn't already exist
        prop_key = f"cl_{props.gamepad_input.lower()}"
        if prop_key not in context.scene:
            context.scene[prop_key] = 0.0
            
        var.targets[0].data_path = f'["{prop_key}"]'
        
        # Expression applies the multiplier scale
        driver.expression = f"val * {props.multiplier}"
        
        self.report({'INFO'}, f"Successfully linked {obj.name} to {props.gamepad_input}!")
        return {'FINISHED'}

class VIEW3D_PT_gamepad_mesh_panel(Panel):
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = 'Gamepad Link'
    bl_label = 'Mesh Gamepad Binding'

    def draw(self, context):
        layout = self.layout
        obj = context.active_object

        if not obj:
            layout.label(text="Select a mesh object", icon='INFO')
            return

        layout.prop(obj, "name", text="", icon='OBJECT_DATA')
        
        props = obj.gamepad_mesh_props
        layout.separator()
        layout.prop(props, "gamepad_input")
        layout.prop(props, "transform_axis")
        layout.prop(props, "multiplier")
        
        layout.separator()
        layout.operator("object.apply_gamepad_driver", icon='DRIVER')

classes = (
    GamepadMeshProperties,
    OBJECT_OT_apply_gamepad_driver,
    VIEW3D_PT_gamepad_mesh_panel,
)

def register():
    for cls in classes:
        bpy.utils.register_class(cls)
    bpy.types.Object.gamepad_mesh_props = PointerProperty(type=GamepadMeshProperties)

def unregister():
    del bpy.types.Object.gamepad_mesh_props
    for cls in classes:
        bpy.utils.unregister_class(cls)

if __name__ == "__main__":
    register()