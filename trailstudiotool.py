bl_info = {
    "name": "TrailStudio Tool",
    "author": "Trailpad",
    "version": (1, 0),
    "blender": (3, 0, 0),
    "location": "View3D > Sidebar > Trailpad",
    "description": "Tag controller meshes with standard names for WebGL auto-binding.",
    "category": "3D View",
}

import bpy

# Map display names to the exact JavaScript MESH_MAPPINGS keys
BUTTON_MAPPINGS = [
    ("Btn_South", "A / Cross (South)", "Face button South"),
    ("Btn_East", "B / Circle (East)", "Face button East"),
    ("Btn_West", "X / Square (West)", "Face button West"),
    ("Btn_North", "Y / Triangle (North)", "Face button North"),
    ("Bumper_Left", "LB / L1", "Left Bumper"),
    ("Bumper_Right", "RB / R1", "Right Bumper"),
    ("Trigger_Left", "LT / L2", "Left Trigger"),
    ("Trigger_Right", "RT / R2", "Right Trigger"),
    ("Btn_L3", "L3 Click", "Left Stick Press Button"),
    ("Btn_R3", "R3 Click", "Right Stick Press Button"),
    ("Btn_Select", "Select / Back", "Select Button"),
    ("Btn_Start", "Start / Forward", "Start Button"),
    ("Btn_Home", "Home / Guide", "Home / Guide Button"),
    ("Stick_Left", "Stick Left", "Left Stick Pivot Group/Mesh"),
    ("Stick_Right", "Stick Right", "Right Stick Pivot Group/Mesh"),
    ("DPad_Rocker", "D-Pad Rocker", "D-Pad Rocker Center Pivot"),
    ("DPad_Up", "D-Pad Up", "D-Pad Up"),
    ("DPad_Down", "D-Pad Down", "D-Pad Down"),
    ("DPad_Left", "D-Pad Left", "D-Pad Left"),
    ("DPad_Right", "D-Pad Right", "D-Pad Right"),
    ("Washer_Left", "Washer Left", "Left Washer"),
    ("Washer_Right", "Washer Right", "Right Washer"),
]

class OBJECT_OT_tag_trailpad_part(bpy.types.Operator):
    """Assign selected mesh to a Trailpad controller part"""
    bl_idname = "object.tag_trailpad_part"
    bl_label = "Tag Part"
    bl_options = {'REGISTER', 'UNDO'}

    part_name: bpy.props.StringProperty()

    def execute(self, context):
        obj = context.active_object
        if not obj:
            self.report({'WARNING'}, "No active object selected.")
            return {'CANCELLED'}

        old_name = obj.name
        obj.name = self.part_name
        self.report({'INFO'}, f"Renamed '{old_name}' to '{self.part_name}'")
        return {'FINISHED'}


class VIEW3D_PT_trailpad_panel(bpy.types.Panel):
    bl_label = "Trailpad GLB Setup"
    bl_idname = "VIEW3D_PT_trailpad_panel"
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = 'Trailpad'

    def draw(self, context):
        layout = self.layout
        obj = context.active_object

        if obj:
            layout.label(text=f"Selected: {obj.name}", icon='OBJECT_DATA')
        else:
            layout.label(text="Select a Mesh Object", icon='INFO')

        layout.separator()
        layout.label(text="Assign Naming Label:")

        col = layout.column(align=True)
        for name_key, label_text, tooltip in BUTTON_MAPPINGS:
            op = col.operator("object.tag_trailpad_part", text=label_text)
            op.part_name = name_key


def register():
    bpy.utils.register_class(OBJECT_OT_tag_trailpad_part)
    bpy.utils.register_class(VIEW3D_PT_trailpad_panel)

def unregister():
    bpy.utils.unregister_class(OBJECT_OT_tag_trailpad_part)
    bpy.utils.unregister_class(VIEW3D_PT_trailpad_panel)

if __name__ == "__main__":
    register()