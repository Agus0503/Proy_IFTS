from rest_framework import routers
from .views import SucursalViewSet

router = routers.DefaultRouter()
router.register(r'', SucursalViewSet)

urlpatterns = router.urls