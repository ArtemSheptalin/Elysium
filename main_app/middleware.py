from django.contrib.sessions.models import Session


'''
    Преимущественно middleware используется для:
        1. Идентификация пользователя. Например, кастомная аутентификация 
        или навешивание каких-нибудь перманентных куков.
        2. Сессии.
        3. Логгирование ответов/запросов.
        4. Ограничение доступа к множеству URL'ов с определённым префиксом.
        5. Инъекции в HTML-ответ.
        6. Для того, то, что нужно выполнить для нескольких роутов. 
        Таким образом мы избавляемся от дублирования кода.
'''     


class MainAppMiddleware:
    def __init__(self, get_response):
        self._get_response = get_response

    '''
        Метод, который вызывается перед отработкой представления 
        (пока все middleware не проверят запрос)
    '''
    
    def __call__(self, request):
        counter = 0
        response = self._get_response(request)
        # response.set_cookie('Name', 'Artem')
        # my_cookie = request.COOKIES
        current_page = request.path 

        '''
            Проверяем, есть ли сессия у конкретного пользователя
        '''
        if not request.user.is_authenticated:
            if request.session.session_key is None:

                '''
                    Если впервые на сайте, то создаем сессию
                '''
                request.session.create()

            session_key = request.session.session_key



        # currentUser_session = Session.objects.get(session_key=session_key)
        
        # print(f"\n\n{currentUser_session}\n\n")

        
        


        return response
    
    '''
        Метод, который вызывается после отработки всех middleware
        и непосредственно перед отработкой конкретного view.

        Если возвращает None, то отрабатывается view, а если HTTP_RESPONSE,
        то view не вызывается
    '''

    def process_view(self, request, view_func, view_args, view_kwargs):
        pass
    
   