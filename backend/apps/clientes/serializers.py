from rest_framework import serializers
from .models import Cliente

class ClienteSerializer(serializers.ModelSerializer):
    localidad_nombre = serializers.CharField(source='localidad.nombre', read_only=True, required=False)
    razon_social_tipo = serializers.CharField(source='razon_social.tipo', read_only=True, required=False)
    
    class Meta:
        model = Cliente
        fields = ['nombre_completo', 'cuit', 'telefono', 'direccion',
                  'localidad', 'localidad_nombre', 'razon_social', 'razon_social_tipo']
