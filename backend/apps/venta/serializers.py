from rest_framework import serializers
from .models import Venta

class VentaSerializer(serializers.ModelSerializer):
    cliente_nombre = serializers.CharField(source='cliente.nombre_completo', read_only=True, required=False)
    producto_desc = serializers.CharField(source='producto.descripcion', read_only=True, required=False)
    sucursal_nombre = serializers.CharField(source='sucursal.nombre', read_only=True, required=False)

    class Meta:
        model = Venta
        fields = ['numero_venta', 'fecha_venta', 'precio_venta', 'cantidad', 'cliente', 'cliente_nombre',
         'producto', 'producto_desc', 'sucursal', 'sucursal_nombre' ]
    