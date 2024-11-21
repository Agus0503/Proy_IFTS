from rest_framework import serializers
from .models import Sucursal

class SucursalSerializer(serializers.Serializer):
    class Meta:
        model = Sucursal
        fields = '__all__'
        