from django.db import models

class RazonSocial(models.Model):
    id = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=50)

    def __str__(self):
        return self.tipo