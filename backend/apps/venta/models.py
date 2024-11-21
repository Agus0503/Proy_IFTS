from django.db import models
from product.models import Producto
from sucursal.models import Sucursal
from clientes.models import Cliente

class Venta(models.Model):
    numero_venta = models.IntegerField(primary_key=True, unique=True)
    fecha_venta = models.DateField()
    precio_venta = models.DecimalField(max_digits=10, decimal_places=2)  
    cantidad = models.IntegerField()
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    sucursal = models.ForeignKey(Sucursal, on_delete=models.CASCADE)

    def __str__(self):
        return f"Venta {self.numero_venta}"