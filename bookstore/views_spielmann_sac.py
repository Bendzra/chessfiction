from django.shortcuts import render

def spielmann_sac_index(request):
    context = {
        'title': "Рудольф Шпильман. Теория жертвы (1936)",
        'prev': "spielmann_about_Draw",
        'home': "spielmann_sac_index",
        'next': "spielmann_sac_title"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/index.htm", context)

def spielmann_sac_title(request):
    context = {
        'title': "Рудольф Шпильман. Теория жертвы (1936)",
        'prev': "spielmann_sac_index",
        'home': "spielmann_sac_index",
        'next': "spielmann_1-0_advice"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/0_Title.htm", context)

def spielmann_advice(request):
    context = {
        'title': "Практические советы шахматистам",
        'prev': "spielmann_sac_title",
        'home': "spielmann_sac_index",
        'next': "spielmann_1-1_opening"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/1-0_Практические_советы_шахматистам.htm", context)

def spielmann_advice_opening(request):
    context = {
        'title': "Теория дебютов для домашнего пользования",
        'prev': "spielmann_1-0_advice",
        'home': "spielmann_sac_index",
        'next': "spielmann_1-2_middle"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/1-1_Начало.htm", context)

def spielmann_advice_middle(request):
    context = {
        'title': "Компас в миттельшпильном море",
        'prev': "spielmann_1-1_opening",
        'home': "spielmann_sac_index",
        'next': "spielmann_1-3_end"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/1-2_Середина.htm", context)

def spielmann_advice_end(request):
    context = {
    'title': "О практическом эндшпиле",
    'prev': "spielmann_1-2_middle",
    'home': "spielmann_sac_index",
    'next': "spielmann_2-0_Teoriya_zhertvy"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/1-3_Конец.htm", context)

def spielmann_sacrifice_theory(request):
    context = {
        'title': "Рудольф Шпильман. Теория жертвы",
        'prev': "spielmann_1-3_end",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-0_Tipy_zhertv"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-0_Теория_жертвы.htm",
                  context)

def spielmann_sacrifice_types(request):
    context = {
        'title': "Теория жертвы: Типы_жертв",
        'prev': "spielmann_2-0_Teoriya_zhertvy",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-1_Mnimaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-0_Типы_жертв.htm",
                  context)

def spielmann_virtual_sacrifice(request):
    context = {
        'title': "Теория жертвы: Мнимая_жертва",
        'prev': "spielmann_2-1-0_Tipy_zhertv",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-1-a_positional_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-1-0_Мнимая_жертва.htm",
                  context)

def spielmann_positional_sacrifice(request):
    context = {
        'title': "Мнимая: Позиционная жертва",
        'prev': "spielmann_2-1-1_Mnimaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-1-b_efficacious_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-1-А._Позиционная_жертва.htm",
                  context)

def spielmann_efficacious_sacrifice(request):
    context = {
        'title': "Мнимая: Результативная жертва",
        'prev': "spielmann_2-1-1-a_positional_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-1-v_matovaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-1-Б._Результативная_жертва.htm",
                  context)

def spielmann_mating_sacrifice(request):
    context = {
        'title': "Мнимая: Матовая жертва",
        'prev': "spielmann_2-1-1-b_efficacious_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-2-0_Realnaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-1-В._Матовая_жертва.htm",
                  context)

def spielmann_real_sacrifice(request):
    context = {
        'title': "Теория жертвы: Реальная_жертва",
        'prev': "spielmann_2-1-1-v_matovaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-2-A._Razvivayushchaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-2-0_Реальная_жертва.htm",
                  context)

def spielmann_develop_sacrifice(request):
    context = {
        'title': "Теория жертвы: Развивающая_жертва",
        'prev': "spielmann_2-1-2-0_Realnaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-2-B._Tormozyashchaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-2-А._Развивающая_жертва.htm",
                  context)

def spielmann_impede_sacrifice(request):
    context = {
        'title': "Теория жертвы: Тормозящая_жертва",
        'prev': "spielmann_2-1-2-A._Razvivayushchaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-2-V._Prepyatstvuyushchaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-2-Б._Тормозящая_жертва.htm",
                  context)

def spielmann_hinder_sacrifice(request):
    context = {
        'title': "Теория жертвы: Препятствующая_жертва",
        'prev': "spielmann_2-1-2-B._Tormozyashchaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-2-G._Linejnaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-2-В._Препятствующая_жертва.htm",
                  context)

def spielmann_liniar_sacrifice(request):
    context = {
        'title': "Теория жертвы: Линейная_жертва",
        'prev': "spielmann_2-1-2-V._Prepyatstvuyushchaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-2-D._Osvobozhdayushchaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-2-Г._Линейная_жертва.htm",
                  context)

def spielmann_clear_sacrifice(request):
    context = {
        'title': "Теория жертвы: Освобождающая_жертва",
        'prev': "spielmann_2-1-2-G._Linejnaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-2-E._Otvlekayushchaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-2-Д._Освобождающая_жертва.htm",
                  context)

def spielmann_divert_sacrifice(request):
    context = {
        'title': "Теория жертвы: Отвлекающая_жертва",
        'prev': "spielmann_2-1-2-D._Osvobozhdayushchaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-2-ZH._ZHertva_protiv_pozicii_rokirovki"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-2-Е._Отвлекающая_жертва.htm",
                  context)

def spielmann_castle_sacrifice(request):
    context = {
        'title': "Теория жертвы: Жертва_против_позиции_рокировки",
        'prev': "spielmann_2-1-2-E._Otvlekayushchaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-1-2-Z._Presleduyushchaya_zhertva"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-2-Ж._Жертва_против_позиции_рокировки.htm",
                  context)

def spielmann_pursue_sacrifice(request):
    context = {
        'title': "Теория жертвы: Преследующая_жертва",
        'prev': "spielmann_2-1-2-ZH._ZHertva_protiv_pozicii_rokirovki",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-2_Velichina_zhertvy"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-1-2-З._Преследующая_жертва.htm",
                  context)

def spielmann_value_sacrifice(request):
    context = {
        'title': "Теория жертвы: Величина_жертвы",
        'prev': "spielmann_2-1-2-Z._Presleduyushchaya_zhertva",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-2a_exchange_sac"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-2-0_Величина_жертвы.htm",
                  context)

def spielmann_exchange_sacrifice(request):
    context = {
        'title': "Величина: Жертва ценности",
        'prev': "spielmann_2-2_Velichina_zhertvy",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-2b_queen_sac"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-2-А._Жертва_ценности.htm",
                  context)

def spielmann_queen_sacrifice(request):
    context = {
        'title': "Величина: Б. Жертва ферзя",
        'prev': "spielmann_2-2a_exchange_sac",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-3_Zaklyuchenie"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-2-Б._Жертва_ферзя.htm",
                  context)

def spielmann_conclusion(request):
    context = {
        'title': "Теория жертвы: Заключение",
        'prev': "spielmann_2-2b_queen_sac",
        'home': "spielmann_sac_index",
        'next': "spielmann_2-4_Ukazatel"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-3_Заключение.htm",
                  context)

def spielmann_reference(request):
    context = {
        'title': "Теория жертвы: Указатель",
        'prev': "spielmann_2-3_Zaklyuchenie",
        'home': "spielmann_sac_index",
        'next': "spielmann_on_chess_and_players"
    }
    return render(request,
                  "Теория_жертвы_(Шпильман,_1936)/2-4_Указатель.htm",
                  context)

def spielmann_on_chess_and_players(request):
    context = {
        'title': "О шахматах и шахматистах",
        'prev': "spielmann_2-3_Zaklyuchenie",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Intro"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-00_О_шахматах_и_шахматистах.htm", context)

def spielmann_about_Intro(request):
    context = {
        'title': "Вступление",
        'prev': "spielmann_on_chess_and_players",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Power"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-01-Intro.htm", context)

def spielmann_about_Power(request):
    context = {
        'title': "Что такое сила игры?",
        'prev': "spielmann_about_Intro",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Preparation"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-02-Power.htm", context)

def spielmann_about_Preparation(request):
    context = {
        'title': "Подготовка",
        'prev': "spielmann_about_Power",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Clock"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-03-Preparation.htm", context)

def spielmann_about_Clock(request):
    context = {
        'title': "Контрольные часы, их господа и рабы",
        'prev': "spielmann_about_Preparation",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Tricks"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-04-Clock.htm", context)

def spielmann_about_Tricks(request):
    context = {
        'title': "Трюки",
        'prev': "spielmann_about_Clock",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Morphy"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-05-Tricks.htm", context)

def spielmann_about_Morphy(request):
    context = {
        'title': "Морфи",
        'prev': "spielmann_about_Tricks",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Olimp"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-06-Morphy.htm", context)

def spielmann_about_Olimp(request):
    context = {
        'title': "Шахматы на Олимпе",
        'prev': "spielmann_about_Morphy",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Mastery"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-07-Olimp.htm", context)

def spielmann_about_Mastery(request):
    context = {
        'title': "О мастерстве",
        'prev': "spielmann_about_Olimp",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Privacy"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-08-Mastery.htm", context)

def spielmann_about_Privacy(request):
    context = {
        'title': "Шахматисты в личной жизни",
        'prev': "spielmann_about_Mastery",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Trap"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-09-Privacy.htm", context)

def spielmann_about_Trap(request):
    context = {
        'title': "Ловушки",
        'prev': "spielmann_about_Privacy",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Fortune"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-10-Trap.htm", context)

def spielmann_about_Fortune(request):
    context = {
        'title': "О случайности",
        'prev': "spielmann_about_Trap",
        'home': "spielmann_sac_index",
        'next': "spielmann_about_Draw"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-11-Fortune.htm", context)

def spielmann_about_Draw(request):
    context = {
        'title': "О ничейной смерти",
        'prev': "spielmann_about_Fortune",
        'home': "spielmann_sac_index",
        'next': "spielmann_sac_index"
    }
    return render(request, "Теория_жертвы_(Шпильман,_1936)/3-12-Draw.htm", context)

