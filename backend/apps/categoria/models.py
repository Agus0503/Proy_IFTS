from django.db import models

class Categoria(models.Model):
    id = models.AutoField(primary_key=True)  
    tipo = models.CharField(max_length=100)

    def __str__(self):
        return f"Categoria: {self.tipo}"