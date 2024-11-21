from django.db import models
from localidades.models import Localidad
from provincias.models import Provincia
from localidades.models import Localidad

class Sucursal(models.Model):
    numero_sucursal = models.IntegerField(primary_key=True, unique=True)
    nombre = models.CharField(max_length=50)
    fecha_apertura = models.DateField(blank=False ,null=False)
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_length=255)
    localidad = models.ForeignKey(Localidad, on_delete=models.CASCADE)

    def __str__(self):
        return f"Sucursal {self.numero_sucursal} - {self.nombre}, {self.localidad}"
