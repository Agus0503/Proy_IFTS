from rest_framework import viewsets
from .serializers import LocalidadSerializer
from .models import Localidad

class LocalidadViewSet(viewsets.ModelViewSet):
    queryset = Localidad.objects.all()
    serializer_class = LocalidadSerializer

    def list(self, request, *args, **kwargs):        
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
