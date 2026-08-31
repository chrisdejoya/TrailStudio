bl_info = {
    "name": "TrailStudio Tool",
    "author": "Trailpad",
    "version": (1, 5),
    "blender": (3, 0, 0),
    "location": "View3D > Sidebar > Trailpad",
    "description": "Tag controller meshes with custom properties and export to GLB.",
    "category": "3D View",
}

import bpy
from bpy_extras.io_utils import ExportHelper

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
]

class OBJECT_OT_tag_trailpad_part(bpy.types.Operator):
    """Assign selected mesh to a Trailpad controller part via Custom Properties"""
    bl_idname = "object.tag_trailpad_part"
    bl_label = "Tag Part"
    bl_options = {'REGISTER', 'UNDO'}

    part_name: bpy.props.StringProperty()

    def execute(self, context):
        obj = context.active_object
        if not obj or obj.type != 'MESH':
            self.report({'WARNING'}, "Please select an active Mesh object.")
            return {'CANCELLED'}

        obj["trailpad_part"] = self.part_name
        self.report({'INFO'}, f"Tagged '{obj.name}' as {self.part_name}")
        return {'FINISHED'}


class OBJECT_OT_untag_trailpad_part(bpy.types.Operator):
    """Remove Trailpad tag from active object"""
    bl_idname = "object.untag_trailpad_part"
    bl_label = "Clear Tag"
    bl_options = {'REGISTER', 'UNDO'}

    def execute(self, context):
        obj = context.active_object
        if obj and "trailpad_part" in obj:
            del obj["trailpad_part"]
            self.report({'INFO'}, f"Cleared tag from '{obj.name}'")
            return {'FINISHED'}
        return {'CANCELLED'}


class OBJECT_OT_export_trailpad_glb(bpy.types.Operator, ExportHelper):
    """Export scene to GLB with Custom Properties enabled for WebGL"""
    bl_idname = "object.export_trailpad_glb"
    bl_label = "Export Trailpad GLB"
    bl_options = {'REGISTER'}

    filename_ext = ".glb"

    filter_glob: bpy.props.StringProperty(
        default="*.glb",
        options={'HIDDEN'},
        maxlen=255,
    )

    def execute(self, context):
        if not hasattr(bpy.ops.export_scene, "gltf"):
            self.report({'ERROR'}, "Blender's built-in glTF 2.0 exporter addon is disabled or missing.")
            return {'CANCELLED'}

        try:
            bpy.ops.export_scene.gltf(
                filepath=self.filepath,
                export_format='GLB',
                export_extras=True,
                use_selection=False
            )
        except Exception as e:
            self.report({'ERROR'}, f"Export failed: {str(e)}")
            return {'CANCELLED'}

        self.report({'INFO'}, f"Successfully exported Trailpad model to {self.filepath}")
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
            current_tag = obj.get("trailpad_part", "None")
            layout.label(text=f"Current Tag: {current_tag}", icon='CHECKMARK' if current_tag != "None" else 'BLANK1')
        else:
            layout.label(text="Select a Mesh Object", icon='INFO')

        layout.separator()
        
        if obj and "trailpad_part" in obj:
            layout.operator("object.untag_trailpad_part", icon='X')
            layout.separator()

        layout.label(text="Assign Naming Label:")

        col = layout.column(align=True)
        for name_key, label_text, tooltip in BUTTON_MAPPINGS:
            # Explicitly force boolean evaluation to prevent NoneType errors on depress
            is_active_tag = bool(obj and obj.get("trailpad_part") == name_key)
            op = col.operator("object.tag_trailpad_part", text=label_text, depress=is_active_tag)
            op.part_name = name_key

        layout.separator(factor=1.5)

        row = layout.row()
        row.scale_y = 1.3
        row.operator("object.export_trailpad_glb", icon='EXPORT')


classes = (
    OBJECT_OT_tag_trailpad_part,
    OBJECT_OT_untag_trailpad_part,
    OBJECT_OT_export_trailpad_glb,
    VIEW3D_PT_trailpad_panel,
)

def register():
    for cls in classes:
        bpy.utils.register_class(cls)

def unregister():
    for cls in reversed(classes):
        bpy.utils.unregister_class(cls)

if __name__ == "__main__":
    try:
        unregister()
    except Exception:
        pass
    register()