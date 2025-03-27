from django.urls import path
from . import views_spielmann_sac

urlpatterns = [
    path('Теория_жертвы_(Шпильман,_1936)/',
         views_spielmann_sac.spielmann_sac_index,
         name="spielmann_sac_index"),
    path('Теория_жертвы_(Шпильман,_1936)/Title/',
         views_spielmann_sac.spielmann_sac_title,
         name="spielmann_sac_title"),

    path('Шпильман/Практические_советы_шахматистам/',
         views_spielmann_sac.spielmann_advice,
        name="spielmann_1-0_advice"),
    path('Шпильман/Практические_советы_шахматистам/Дебют/',
         views_spielmann_sac.spielmann_advice_opening,
        name="spielmann_1-1_opening"),
    path('Шпильман/Практические_советы_шахматистам/Миттельшпиль/',
         views_spielmann_sac.spielmann_advice_middle,
        name="spielmann_1-2_middle"),
    path('Шпильман/Практические_советы_шахматистам/Эндшпиль/',
         views_spielmann_sac.spielmann_advice_end,
        name="spielmann_1-3_end"),

    path('Шпильман/Теория_жертвы/',
         views_spielmann_sac.spielmann_sacrifice_theory,
         name="spielmann_2-0_Teoriya_zhertvy"),
    path('Шпильман/Теория_жертвы/1-0_Типы_жертв/',
         views_spielmann_sac.spielmann_sacrifice_types,
         name="spielmann_2-1-0_Tipy_zhertv"),

    path('Шпильман/Теория_жертвы/1-1_Мнимая_жертва/',
         views_spielmann_sac.spielmann_virtual_sacrifice,
         name="spielmann_2-1-1_Mnimaya_zhertva"),
    path('Шпильман/Теория_жертвы/1-1_А._Позиционная_жертва/',
         views_spielmann_sac.spielmann_positional_sacrifice,
         name="spielmann_2-1-1-a_positional_zhertva"),
    path('Шпильман/Теория_жертвы/1-1_Б._Результативная_жертва/',
         views_spielmann_sac.spielmann_efficacious_sacrifice,
         name="spielmann_2-1-1-b_efficacious_zhertva"),
    path('Шпильман/Теория_жертвы/1-1_В._Матовая_жертва/',
         views_spielmann_sac.spielmann_mating_sacrifice,
         name="spielmann_2-1-1-v_matovaya_zhertva"),

	 path('Шпильман/Теория_жертвы/1-2-0_Реальная_жертва/',
         views_spielmann_sac.spielmann_real_sacrifice,
         name="spielmann_2-1-2-0_Realnaya_zhertva"),
    path('Шпильман/Теория_жертвы/1-2-А._Развивающая_жертва/',
         views_spielmann_sac.spielmann_develop_sacrifice,
         name="spielmann_2-1-2-A._Razvivayushchaya_zhertva"),
    path('Шпильман/Теория_жертвы/1-2-Б._Тормозящая_жертва/',
         views_spielmann_sac.spielmann_impede_sacrifice,
         name="spielmann_2-1-2-B._Tormozyashchaya_zhertva"),
    path('Шпильман/Теория_жертвы/1-2-В._Препятствующая_жертва/',
         views_spielmann_sac.spielmann_hinder_sacrifice,
         name="spielmann_2-1-2-V._Prepyatstvuyushchaya_zhertva"),
    path('Шпильман/Теория_жертвы/1-2-Г._Линейная_жертва/',
         views_spielmann_sac.spielmann_liniar_sacrifice,
         name="spielmann_2-1-2-G._Linejnaya_zhertva"),
    path('Шпильман/Теория_жертвы/1-2-Д._Освобождающая_жертва/',
         views_spielmann_sac.spielmann_clear_sacrifice,
         name="spielmann_2-1-2-D._Osvobozhdayushchaya_zhertva"),
    path('Шпильман/Теория_жертвы/1-2-Е._Отвлекающая_жертва/',
         views_spielmann_sac.spielmann_divert_sacrifice,
         name="spielmann_2-1-2-E._Otvlekayushchaya_zhertva"),
    path('Шпильман/Теория_жертвы/1-2-Ж._Жертва_против_позиции_рокировки/',
         views_spielmann_sac.spielmann_castle_sacrifice,
         name="spielmann_2-1-2-ZH._ZHertva_protiv_pozicii_rokirovki"),
    path('Шпильман/Теория_жертвы/1-2-З._Преследующая_жертва/',
         views_spielmann_sac.spielmann_pursue_sacrifice,
         name="spielmann_2-1-2-Z._Presleduyushchaya_zhertva"),

    path('Шпильман/Теория_жертвы/2_Величина_жертвы/',
         views_spielmann_sac.spielmann_value_sacrifice,
         name="spielmann_2-2_Velichina_zhertvy"),
    path('Шпильман/Теория_жертвы/А._Жертва_ценности/',
         views_spielmann_sac.spielmann_exchange_sacrifice,
         name="spielmann_2-2a_exchange_sac"),
    path('Шпильман/Теория_жертвы/Б._Жертва_ферзя/',
         views_spielmann_sac.spielmann_queen_sacrifice,
         name="spielmann_2-2b_queen_sac"),

    path('Шпильман/Теория_жертвы/3_Заключение/',
         views_spielmann_sac.spielmann_conclusion,
         name="spielmann_2-3_Zaklyuchenie"),
    path('Шпильман/Теория_жертвы/4_Указатель/',
         views_spielmann_sac.spielmann_reference,
         name="spielmann_2-4_Ukazatel"),

    path('Шпильман/О_шахматах_и_шахматистах/',
         views_spielmann_sac.spielmann_on_chess_and_players,
         name="spielmann_on_chess_and_players"),
    path('Шпильман/О_шахматах_и_шахматистах/вступление/',
         views_spielmann_sac.spielmann_about_Intro,
         name="spielmann_about_Intro"),
    path('Шпильман/О_шахматах_и_шахматистах/сила_игры/',
         views_spielmann_sac.spielmann_about_Power,
         name="spielmann_about_Power"),
    path('Шпильман/О_шахматах_и_шахматистах/подготовка/',
         views_spielmann_sac.spielmann_about_Preparation,
         name="spielmann_about_Preparation"),
    path('Шпильман/О_шахматах_и_шахматистах/часы/',
         views_spielmann_sac.spielmann_about_Clock,
         name="spielmann_about_Clock"),
    path('Шпильман/О_шахматах_и_шахматистах/трюки/',
         views_spielmann_sac.spielmann_about_Tricks,
         name="spielmann_about_Tricks"),
    path('Шпильман/О_шахматах_и_шахматистах/морфи/',
         views_spielmann_sac.spielmann_about_Morphy,
         name="spielmann_about_Morphy"),
    path('Шпильман/О_шахматах_и_шахматистах/на_олимпе/',
         views_spielmann_sac.spielmann_about_Olimp,
         name="spielmann_about_Olimp"),
    path('Шпильман/О_шахматах_и_шахматистах/о_мастерстве/',
         views_spielmann_sac.spielmann_about_Mastery,
         name="spielmann_about_Mastery"),
    path('Шпильман/О_шахматах_и_шахматистах/в_личной_жизни/',
         views_spielmann_sac.spielmann_about_Privacy,
         name="spielmann_about_Privacy"),
    path('Шпильман/О_шахматах_и_шахматистах/ловушки/',
         views_spielmann_sac.spielmann_about_Trap,
         name="spielmann_about_Trap"),
    path('Шпильман/О_шахматах_и_шахматистах/о_случайности/',
         views_spielmann_sac.spielmann_about_Fortune,
         name="spielmann_about_Fortune"),
    path('Шпильман/О_шахматах_и_шахматистах/о_ничейной_смерти/',
         views_spielmann_sac.spielmann_about_Draw,
         name="spielmann_about_Draw"),
]
