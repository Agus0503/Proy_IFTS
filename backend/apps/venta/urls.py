from rest_framework import routers
from .views import VentaViewSet

router = routers.DefaultRouter()
router.register(r'', VentaViewSet)

urlpatterns = router.urls