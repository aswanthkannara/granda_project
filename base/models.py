from django.db import models

# Create your models here.
class UploadedImage(models.Model):
    PIC_CHOICES = (
        ('A', 'Flat Image'),
        ('B', 'Blue print'),
    )
    image = models.ImageField(upload_to='uploads/')
    description = models.CharField(max_length=512, null=True, blank=True)
    type = models.CharField(choices=PIC_CHOICES, null=True, max_length=100)
    uploaded_at = models.DateTimeField(auto_now_add=True)