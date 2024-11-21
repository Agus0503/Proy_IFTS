from rest_framework import viewsets
from .serializers import RazonSocialSerializer
from .models import RazonSocial

class RazonSocialViewSet(viewsets.ModelViewSet):
    queryset = RazonSocial.objects.all()
    serializer_class = RazonSocialSerializer

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
