from django.db import models

class Data(models.Model):
	name = models.CharField(max_length=200)
	description = models.CharField(max_length=500)
	height = models.IntegerField()
	image = models.CharField(max_length=1000)
	created_at = models.DateTimeField(auto_now_add=True)