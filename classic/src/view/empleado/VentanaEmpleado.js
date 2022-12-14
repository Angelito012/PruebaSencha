Ext.define('MiAppSencha.view.empleado.VentanaEmpleado',{
    extend: 'MiAppSencha.view.FormBase',
    title: 'Agregar Empleado',
    controller: 'empleado',

    scrollable: true,


    items:[
        {
            xtype: 'form',
            bodyPadding: 10, 

            defaults: {
                xtype: 'textfield',
            },

            fieldDefaults:{
                msgTarget: 'under',
                anchor: '100%',
                allowBlank: false
            },

            items:[
                {
                    name: "id",
                    itemId: "id",
                    hidden: true,
                    allowBlank: true,
                },
                {
                    fieldLabel: 'Nombre',
                    name: 'nombre',
                    itemId: 'nombre'
                },
                {
                    fieldLabel: 'Apellido',
                    name: 'apellido',
                    itemId: 'apellido'
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    itemId: 'email'
                },
                {
                    fieldLabel: 'Direccion',
                    name: 'direccion',
                    itemId: 'direccion'
                },
                {
                    xtype: 'comboempresas',
                    name: 'empresa',
                    itemId: 'empresa',
                    editable: false
                }

            ]
        }
    ]
})