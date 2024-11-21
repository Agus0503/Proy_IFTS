from django.db import models

class Provincia(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=90)

    def __str__(self):
        return f"Provincia: {self.nombre}"