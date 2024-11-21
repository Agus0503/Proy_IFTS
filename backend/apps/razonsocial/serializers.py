from rest_framework import serializers
from .models import RazonSocial

class RazonSocialSerializer(serializers.Serializer):
    class Meta:
        model = RazonSocial
        fields = '__all__'