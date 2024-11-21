from django.db import models
from razonsocial.models import RazonSocial
from localidades.models import Localidad
from provincias.models import Provincia

class Proveedor(models.Model):
    id_proveedor = models.AutoField(primary_key=True)
    cuit = models.CharField(max_length=13, unique=True)
    razon_social = models.ForeignKey(RazonSocial, on_delete=models.CASCADE)
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_length=100)
    localidad = models.ForeignKey(Localidad, on_delete=models.CASCADE)

    def __str__(self):
        return f"Razon social: {self.razon_social}"