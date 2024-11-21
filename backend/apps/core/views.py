from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Vista para la creación de usuarios
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# Nueva vista para obtener los permisos del usuario autenticado
@api_view(['GET'])
def obtener_permisos_usuario(request):
    usuario = request.user
    if usuario.is_authenticated:
        permisos = usuario.get_all_permissions()
        return Response({'permisos': list(permisos)})
    else:
        return Response({'error': 'Usuario no autenticado'}, status=401)
