from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    categoria_tipo = serializers.CharField(source='categoria.tipo', read_only=True)
    proveedor_razon_social = serializers.CharField(source='proveedor.razon_social', read_only=True, required=False)

    class Meta:
        model = Producto
        fields = ['codigo', 'descripcion', 'precio', 'costo', 'stock', 'atributos', 'foto',
         'categoria', 'categoria_tipo', 'proveedor', 'proveedor_razon_social']
