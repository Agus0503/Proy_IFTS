from django.db import models
from provincias.models import Provincia

class Localidad(models.Model):
    id = models.AutoField(primary_key=True)  
    nombre = models.CharField(max_length=100)
    provincia = models.ForeignKey(Provincia, on_delete=models.CASCADE)
    numero_sucursal = models.IntegerField()

    def __str__(self):
        return f"Localidad: {self.nombre}, Provincia: {self.provincia}"