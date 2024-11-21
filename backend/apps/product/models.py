from django.db import models
from proveedores.models import Proveedor
from categoria.models import Categoria

class Producto(models.Model):
    codigo = models.IntegerField(primary_key=True, unique=True)
    descripcion = models.TextField(blank=False, null=False)
    precio = models.DecimalField(max_digits=10, decimal_places=2)  
    costo = models.DecimalField(max_digits=10, decimal_places=2) 
    stock = models.IntegerField(null=False, blank=False)
    proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    atributos = models.JSONField() 
    foto = models.ImageField(upload_to='productos_fotos/', blank=True, null=True)  

    def __str__(self):
        return self.descripcion