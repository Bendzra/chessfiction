from django.shortcuts import render

def maroczy_morphy_index(request):
    context = {
        'title': "Оглавление",
        'prev': "maroczy_morphy_4_Prilozheniya",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_title"
    }
    return render(
        request,
        "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/index.htm",
        context
    )

def maroczy_morphy_title(request):
    context = {
        'title': "Морфи",
        'prev': "maroczy_morphy_index",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_1_Vstuplenie"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/0_Title.htm", context)

def maroczy_morphy_intro(request):
    context = {
        'title': "Вступление",
        'prev': "maroczy_morphy_title",
        'home': "maroczy_morphy_index",
        'next': "zagoryanskij_-_povest_o_Morfi"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/1_Вступление.htm", context)

def zagoryanskij_morphy00(request):
    context = {
    'title': "Евгений Загорянский. Повесть о Морфи",
    'prev': "maroczy_morphy_1_Vstuplenie",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-01"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-00_Загорянский_-_Повесть_о_Морфи.htm", context)

def zagoryanskij_morphy01(request):
    context = {
    'title': "Глава 1",
    'prev': "zagoryanskij_-_povest_o_Morfi",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-02"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-01.htm", context)

def zagoryanskij_morphy02(request):
    context = {
    'title': "Глава 2",
    'prev': "zagoryanskij_morphy-01",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-03"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-02.htm", context)

def zagoryanskij_morphy03(request):
    context = {
    'title': "Глава 3",
    'prev': "zagoryanskij_morphy-02",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-04"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-03.htm", context)

def zagoryanskij_morphy04(request):
    context = {
    'title': "Глава 4",
    'prev': "zagoryanskij_morphy-03",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-05"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-04.htm", context)

def zagoryanskij_morphy05(request):
    context = {
    'title': "Глава 5",
    'prev': "zagoryanskij_morphy-04",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-06"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-05.htm", context)

def zagoryanskij_morphy06(request):
    context = {
    'title': "Глава 6",
    'prev': "zagoryanskij_morphy-05",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-07"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-06.htm", context)

def zagoryanskij_morphy07(request):
    context = {
    'title': "Глава 7",
    'prev': "zagoryanskij_morphy-06",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-08"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-07.htm", context)

def zagoryanskij_morphy08(request):
    context = {
    'title': "Глава 8",
    'prev': "zagoryanskij_morphy-07",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-09"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-08.htm", context)

def zagoryanskij_morphy09(request):
    context = {
    'title': "Глава 9",
    'prev': "zagoryanskij_morphy-08",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-10"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-09.htm", context)

def zagoryanskij_morphy10(request):
    context = {
    'title': "Глава 10",
    'prev': "zagoryanskij_morphy-09",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-11"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-10.htm", context)

def zagoryanskij_morphy11(request):
    context = {
    'title': "Глава 11",
    'prev': "zagoryanskij_morphy-10",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-12"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-11.htm", context)

def zagoryanskij_morphy12(request):
    context = {
    'title': "Глава 12",
    'prev': "zagoryanskij_morphy-11",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-13"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-12.htm", context)

def zagoryanskij_morphy13(request):
    context = {
    'title': "Глава 13",
    'prev': "zagoryanskij_morphy-12",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-14"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-13.htm", context)

def zagoryanskij_morphy14(request):
    context = {
    'title': "Глава 14",
    'prev': "zagoryanskij_morphy-13",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-15"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-14.htm", context)

def zagoryanskij_morphy15(request):
    context = {
    'title': "Глава 15",
    'prev': "zagoryanskij_morphy-14",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-16"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-15.htm", context)

def zagoryanskij_morphy16(request):
    context = {
    'title': "Глава 16",
    'prev': "zagoryanskij_morphy-15",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-17"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-16.htm", context)

def zagoryanskij_morphy17(request):
    context = {
    'title': "Глава 17",
    'prev': "zagoryanskij_morphy-16",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-18"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-17.htm", context)

def zagoryanskij_morphy18(request):
    context = {
    'title': "Глава 18",
    'prev': "zagoryanskij_morphy-17",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-19"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-18.htm", context)

def zagoryanskij_morphy19(request):
    context = {
    'title': "Глава 19",
    'prev': "zagoryanskij_morphy-18",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-20"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-19.htm", context)

def zagoryanskij_morphy20(request):
    context = {
    'title': "Глава 20",
    'prev': "zagoryanskij_morphy-19",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-21"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-20.htm", context)

def zagoryanskij_morphy21(request):
    context = {
    'title': "Глава 21",
    'prev': "zagoryanskij_morphy-20",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-22"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-21.htm", context)

def zagoryanskij_morphy22(request):
    context = {
    'title': "Глава 22",
    'prev': "zagoryanskij_morphy-21",
    'home': "maroczy_morphy_index",
    'next': "zagoryanskij_morphy-23"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-22.htm", context)

def zagoryanskij_morphy23(request):
    context = {
        'title': "Глава 23",
        'prev': "zagoryanskij_morphy-22",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-0_Maroci_-_Izbrannye_partii_Morfi"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/2-23.htm", context)

def maroczy_morphy_games(request):
    context = {
        'title': "Геза Мароци. Избранные партии Морфи",
        'prev': "zagoryanskij_morphy-23",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-1"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-0_Мароци_-_Избранные_партии_Морфи.htm", context)

def maroczy_morphy1(request):
    context = {
        'title': "Партии юношеских лет",
        'prev': "maroczy_morphy_3-0_Maroci_-_Izbrannye_partii_Morfi",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-2"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-1.htm", context)

def maroczy_morphy2(request):
    context = {
        'title': "Нью-Йорк, осень 1857 года",
        'prev': "maroczy_morphy_3-1",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-3"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-2.htm", context)

def maroczy_morphy3(request):
    context = {
        'title': "Нью-Йорк, осень 1857 года (Продолжение)",
        'prev': "maroczy_morphy_3-2",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-4-0"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-3.htm", context)

def maroczy_morphy4_0(request):
    context = {
        'title': "В Англии, лето 1858 года",
        'prev': "maroczy_morphy_3-3",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-4-1"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-4-0.htm", context)

def maroczy_morphy4_1(request):
    context = {
        'title': "В Англии, лето 1858 года",
        'prev': "maroczy_morphy_3-4-0",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-4-2"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-4-1.htm", context)

def maroczy_morphy4_2(request):
    context = {
        'title': "В Англии, лето 1858 года",
        'prev': "maroczy_morphy_3-4-1",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-5-0"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-4-2.htm", context)

def maroczy_morphy5_0(request):
    context = {
        'title': "Во Франции 1858-1859 годы",
        'prev': "maroczy_morphy_3-4-2",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-5-1"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-5-0.htm", context)

def maroczy_morphy5_1(request):
    context = {
        'title': "Во Франции 1858-1859 годы",
        'prev': "maroczy_morphy_3-5-0",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-5-2"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-5-1.htm", context)

def maroczy_morphy5_2(request):
    context = {
        'title': "Во Франции 1858-1859 годы",
        'prev': "maroczy_morphy_3-5-1",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-6"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-5-2.htm", context)

def maroczy_morphy6(request):
    context = {
        'title': "Отдельные партии против французских мастеров и любителей",
        'prev': "maroczy_morphy_3-5-2",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-7"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-6.htm", context)

def maroczy_morphy7(request):
    context = {
        'title': "Из партий с Левенталем",
        'prev': "maroczy_morphy_3-6",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-8"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-7.htm", context)

def maroczy_morphy8(request):
    context = {
        'title': "В Америке, 1859—1860 годы",
        'prev': "maroczy_morphy_3-7",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_3-9"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-8.htm", context)

def maroczy_morphy9(request):
    context = {
        'title': "Последние годы жизни Морфи",
        'prev': "maroczy_morphy_3-8",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_4_Prilozheniya"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/3-9.htm", context)

def maroczy_morphy_appendix(request):
    context = {
        'title': "Приложения",
        'prev': "maroczy_morphy_3-9",
        'home': "maroczy_morphy_index",
        'next': "maroczy_morphy_index"
    }
    return render(request, "Повесть_о_Морфи,_избранные_партии_Морфи_(Загорянский,_Мароци,_1980)/4_Приложения.htm", context)
