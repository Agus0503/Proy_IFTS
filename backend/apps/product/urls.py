from rest_framework import routers
from .views import ProductoViewSet

router = routers.DefaultRouter()
router.register(r'', ProductoViewSet)

urlpatterns = router.urls