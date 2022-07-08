from django.shortcuts import render, redirect
from django.urls import reverse
from django.views.generic import FormView

from form_validations.models import CustomUser


class UserRegisterView(FormView):
    model = CustomUser
    template = 'form.html'

    def get(self, request):
        return render(request, self.template)

    def post(self, request):
        fullname = request.POST['fullname']
        email = request.POST['email']
        phone = request.POST['phone']
        profile_pic = request.FILES['profile_pic']
        url = request.POST['url']
        card_number = request.POST['card_number']
        user = CustomUser.objects.create(fullname=fullname, email=email, phone=phone, profile_pic=profile_pic, url=url,
                                         card_number=card_number)
        user.save()
        submit_url = reverse('register')
        return redirect(submit_url)
