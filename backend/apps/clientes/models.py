from django.db import models
from razonsocial.models import RazonSocial
from localidades.models import Localidad

class Cliente(models.Model):
    id = models.AutoField(primary_key=True)  
    nombre_completo = models.CharField(max_length=90)
    cuit = models.CharField(max_length=13, unique=True)
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_length=100)
    localidad = models.ForeignKey(Localidad, on_delete=models.CASCADE)
    razon_social = models.ForeignKey(RazonSocial, on_delete=models.CASCADE)

    def __str__(self):
        return f"Nombre: {self.nombre_completo}, Razon Social: {self.razon_social}"
