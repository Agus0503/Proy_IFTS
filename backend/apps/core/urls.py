from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.routers import DefaultRouter
from . import views
from proveedores.views import ProveedorViewSet
from clientes.views import ClienteViewSet
from categoria.views import CategoriaViewSet
from localidades.views import LocalidadViewSet
from product.views import ProductoViewSet
from provincias.views import ProvinciaViewSet
from razonsocial.views import RazonSocialViewSet
from sucursal.views import SucursalViewSet
from venta.views import VentaViewSet

router = DefaultRouter()
router.register(r'categorias', CategoriaViewSet)
router.register(r'clientes', ClienteViewSet)
router.register(r'localidades', LocalidadViewSet)
router.register(r'productos', ProductoViewSet)
router.register(r'proveedores', ProveedorViewSet)
router.register(r'provincias', ProvinciaViewSet)
router.register(r'razon-social', RazonSocialViewSet)
router.register(r'sucursales', SucursalViewSet)
router.register(r'ventas', VentaViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path("api/user/register/", views.CreateUserView.as_view(), name="register"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #path("api-auth/", include("rest_framework.urls")),
    path('api/permisos/', views.obtener_permisos_usuario, name='obtener_permisos_usuario'),
]
