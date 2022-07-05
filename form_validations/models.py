from django.db import models


class CustomUser(models.Model):
    fullname = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    password = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=255, null=True, blank=True)
    profile_pic = models.FileField(default=None, null=True, blank=True)

    class Meta(object):
        db_table = "custom_user"
