from django.shortcuts import render

def linder_first_russian_masters_index(request):
    context = {
        'title': "index",
        'prev': "linder_first_russian_masters_literatura_i_istochniki",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_title"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/index.htm", context)

def linder_first_russian_masters_the_first_russian_masters(request):
    context = {
        'title': "Первые русские мастера",
        'prev': "linder_first_russian_masters_index",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_vvedenie"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/01-Первые русские мастера.htm", context)

def linder_first_russian_masters_introduction(request):
    context = {
        'title': "Введение",
        'prev': "linder_first_russian_masters_title",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_petrov"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/02-Введение.htm", context)

def linder_first_russian_masters_petrov(request):
    context = {
        'title': "Петров",
        'prev': "linder_first_russian_masters_vvedenie",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_stanovlenie_talanta"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-00-Петров.htm", context)

def linder_first_russian_masters_formation_of_talent(request):
    context = {
        'title': "Становление таланта",
        'prev': "linder_first_russian_masters_petrov",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_kladez_mudrosti"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-01-Становление таланта.htm", context)

def linder_first_russian_masters_well_of_wisdom(request):
    context = {
        'title': "Кладезь мудрости",
        'prev': "linder_first_russian_masters_stanovlenie_talanta",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_po_sankt-peterburgskoj_pochte"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-02-Кладезь мудрости.htm", context)

def linder_first_russian_masters_by_st_petersburg_post_office(request):
    context = {
        'title': "По санкт-петербургской почте",
        'prev': "linder_first_russian_masters_kladez_mudrosti",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_varshavskie_vstrechi"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-03-По санкт-петербургской почте.htm", context)

def linder_first_russian_masters_warsaw_meetings(request):
    context = {
        'title': "Варшавские встречи",
        'prev': "linder_first_russian_masters_po_sankt-peterburgskoj_pochte",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_zashchita_petrova"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-04-Варшавские встречи.htm", context)

def linder_first_russian_masters_petrovs_defense(request):
    context = {
        'title': "Защита петрова",
        'prev': "linder_first_russian_masters_varshavskie_vstrechi",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_kto_teryaet_-_vyigryvaet"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-05-Защита петрова.htm", context)

def linder_first_russian_masters_whoever_loses_wins(request):
    context = {
        'title': "«Кто теряет - выигрывает...»",
        'prev': "linder_first_russian_masters_zashchita_petrova",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_prevoskhodstvo_veterana"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-06-«Кто теряет - выигрывает...».htm", context)

def linder_first_russian_masters_veteran_superiority(request):
    context = {
        'title': "Превосходство ветерана",
        'prev': "linder_first_russian_masters_kto_teryaet_-_vyigryvaet",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_match_s_poslesloviem"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-07-Превосходство ветерана.htm", context)

def linder_first_russian_masters_afterword_match(request):
    context = {
        'title': "Матч с послесловием",
        'prev': "linder_first_russian_masters_prevoskhodstvo_veterana",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_petrov_i_morfi"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-08-Матч с послесловием.htm", context)

def linder_first_russian_masters_petrov_and_morphy(request):
    context = {
        'title': "Петров и Морфи",
        'prev': "linder_first_russian_masters_match_s_poslesloviem",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_stranstvuyushchij_rycar"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-09-Петров и Морфи.htm", context)

def linder_first_russian_masters_knight_errant(request):
    context = {
        'title': "Странствующий рыцарь",
        'prev': "linder_first_russian_masters_petrov_i_morfi",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_yanish"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/03-10-Странствующий рыцарь.htm", context)

def linder_first_russian_masters_yanish(request):
    context = {
        'title': "Яниш",
        'prev': "linder_first_russian_masters_stranstvuyushchij_rycar",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_uchenik_petrova"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/04-00-Яниш.htm", context)

def linder_first_russian_masters_petrovs_student(request):
    context = {
        'title': "Ученик Петрова",
        'prev': "linder_first_russian_masters_yanish",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_novyj_analiz"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/04-01-Ученик Петрова.htm", context)

def linder_first_russian_masters_new_analysis(request):
    context = {
        'title': "«Новый анализ...»",
        'prev': "linder_first_russian_masters_uchenik_petrova",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_staunton_-_yanish"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/04-02-«Новый анализ...».htm", context)

def linder_first_russian_masters_staunton___yanish(request):
    context = {
        'title': "Стаунтон - Яниш",
        'prev': "linder_first_russian_masters_novyj_analiz",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_poeziya_shahmat"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/04-03-Стаунтон - Яниш.htm", context)

def linder_first_russian_masters_chess_poetry(request):
    context = {
        'title': "Поэзия шахмат",
        'prev': "linder_first_russian_masters_staunton_-_yanish",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_s_tochki_zreniya_matematiki"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/04-04-Поэзия шахмат.htm", context)

def linder_first_russian_masters_mathematically(request):
    context = {
        'title': "С точки зрения математики...",
        'prev': "linder_first_russian_masters_poeziya_shahmat",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_urusovy"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/04-05-С точки зрения математики....htm", context)

def linder_first_russian_masters_urusovs(request):
    context = {
        'title': "Урусовы",
        'prev': "linder_first_russian_masters_s_tochki_zreniya_matematiki",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_silnejshij_v_stolice"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/05-00-Урусовы.htm", context)

def linder_first_russian_masters_strongest_in_the_capital(request):
    context = {
        'title': "Сильнейший в столице",
        'prev': "linder_first_russian_masters_urusovy",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_moskovskij_master"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/05-01-Сильнейший в столице.htm", context)

def linder_first_russian_masters_moscow_master(request):
    context = {
        'title': "Московский мастер",
        'prev': "linder_first_russian_masters_silnejshij_v_stolice",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_gambit_urusova"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/05-02-Московский мастер.htm", context)

def linder_first_russian_masters_urusovs_gambit(request):
    context = {
        'title': "Гамбит Урусова",
        'prev': "linder_first_russian_masters_moskovskij_master",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_vtoroj_v_rossii"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/05-03-Гамбит Урусова.htm", context)

def linder_first_russian_masters_second_in_russia(request):
    context = {
        'title': "Второй в России",
        'prev': "linder_first_russian_masters_gambit_urusova",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_moj_sevastopolskij_drug"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/05-04-Второй в России.htm", context)

def linder_first_russian_masters_my_sevastopol_friend(request):
    context = {
        'title': "«Мой севастопольский друг»",
        'prev': "linder_first_russian_masters_vtoroj_v_rossii",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_shumov"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/05-05-«Мой севастопольский друг».htm", context)

def linder_first_russian_masters_shumov(request):
    context = {
        'title': "Шумов",
        'prev': "linder_first_russian_masters_moj_sevastopolskij_drug",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_ya_ostayus_v_peterburge"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/06-00-Шумов.htm", context)

def linder_first_russian_masters_i_stay_in_st_petersburg(request):
    context = {
        'title': "«Я остаюсь в Петербурге»",
        'prev': "linder_first_russian_masters_shumov",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_pevec_kombinacii"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/06-01-«Я остаюсь в Петербурге».htm", context)

def linder_first_russian_masters_singer_combination(request):
    context = {
        'title': "Певец комбинации",
        'prev': "linder_first_russian_masters_ya_ostayus_v_peterburge",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_shutka_na_shahmatnom_pole"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/06-02-Певец комбинации.htm", context)

def linder_first_russian_masters_joke_on_the_chessboard(request):
    context = {
        'title': "Шутка на шахматном поле",
        'prev': "linder_first_russian_masters_pevec_kombinacii",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_master-zhurnalist"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/06-03-Шутка на шахматном поле.htm", context)

def linder_first_russian_masters_master_journalist(request):
    context = {
        'title': "Мастер-журналист",
        'prev': "linder_first_russian_masters_shutka_na_shahmatnom_pole",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_poslednie_gody"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/06-04-Мастер-журналист.htm", context)

def linder_first_russian_masters_last_years(request):
    context = {
        'title': "Последние годы",
        'prev': "linder_first_russian_masters_master-zhurnalist",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_shiffers"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/06-05-Последние годы.htm", context)

def linder_first_russian_masters_schiffers(request):
    context = {
        'title': "Шифферс",
        'prev': "linder_first_russian_masters_poslednie_gody",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_v_kafe_dominik"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/07-00-Шифферс.htm", context)

def linder_first_russian_masters_in_the_cafe_dominik(request):
    context = {
        'title': "В кафе «Доминик»",
        'prev': "linder_first_russian_masters_shiffers",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_druzya-soperniki"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/07-01-В кафе «Доминик».htm", context)

def linder_first_russian_masters_friends_rivals(request):
    context = {
        'title': "Друзья-соперники",
        'prev': "linder_first_russian_masters_v_kafe_dominik",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_spodvizhnik_chigorina"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/07-02-Друзья-соперники.htm", context)

def linder_first_russian_masters_chigorins_associate(request):
    context = {
        'title': "Сподвижник Чигорина",
        'prev': "linder_first_russian_masters_druzya-soperniki",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_gastings_1895"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/07-03-Сподвижник Чигорина.htm", context)

def linder_first_russian_masters_hastings_1895(request):
    context = {
        'title': "Гастингс, 1895",
        'prev': "linder_first_russian_masters_spodvizhnik_chigorina",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_stejnic_-_shiffers"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/07-04-Гастингс, 1895.htm", context)

def linder_first_russian_masters_steinitz___schiffers(request):
    context = {
        'title': "Стейниц - Шифферс",
        'prev': "linder_first_russian_masters_gastings_1895",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_pervye_vserossijskie"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/07-05-Стейниц - Шифферс.htm", context)

def linder_first_russian_masters_the_first_all_russian(request):
    context = {
        'title': "Первые всероссийские",
        'prev': "linder_first_russian_masters_stejnic_-_shiffers",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_samouchitel_shahmatnoj_igry"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/07-06-Первые всероссийские.htm", context)

def linder_first_russian_masters_self_instruction_manual_of_the_chess_game(request):
    context = {
        'title': "«Самоучитель шахматной игры»",
        'prev': "linder_first_russian_masters_pervye_vserossijskie",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_solovcov"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/07-07-«Самоучитель шахматной игры».htm", context)

def linder_first_russian_masters_solovtsov(request):
    context = {
        'title': "Соловцов",
        'prev': "linder_first_russian_masters_samouchitel_shahmatnoj_igry",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_prezident_obshchestva_lyubitelej"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/08-00-Соловцов.htm", context)

def linder_first_russian_masters_president_of_the_society_of_amateurs(request):
    context = {
        'title': "Президент общества любителей",
        'prev': "linder_first_russian_masters_solovcov",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_uspekh_v_stolichnom_turnire"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/08-01-Президент общества любителей.htm", context)

def linder_first_russian_masters_success_in_the_capital_tournament(request):
    context = {
        'title': "Успех в столичном турнире",
        'prev': "linder_first_russian_masters_prezident_obshchestva_lyubitelej",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_iz_zapisnoj_knizhki_solovcova"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/08-02-Успех в столичном турнире.htm", context)

def linder_first_russian_masters_from_solovtsovs_notebook(request):
    context = {
        'title': "Из записной книжки Соловцова",
        'prev': "linder_first_russian_masters_uspekh_v_stolichnom_turnire",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_partii_s_chigorinym"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/08-03-Из записной книжки Соловцова.htm", context)

def linder_first_russian_masters_games_with_chigorin(request):
    context = {
        'title': "Партии с Чигориным",
        'prev': "linder_first_russian_masters_iz_zapisnoj_knizhki_solovcova",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_mezhdu_muzykoj_i_shahmatami"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/08-04-Партии с Чигориным.htm", context)

def linder_first_russian_masters_between_music_and_chess(request):
    context = {
        'title': "Между музыкой и шахматами",
        'prev': "linder_first_russian_masters_partii_s_chigorinym",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_hardin"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/08-05-Между музыкой и шахматами.htm", context)

def linder_first_russian_masters_hardin(request):
    context = {
        'title': "Хардин",
        'prev': "linder_first_russian_masters_mezhdu_muzykoj_i_shahmatami",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_peterburgskie_batalii"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/09-00-Хардин.htm", context)

def linder_first_russian_masters_petersburg_battles(request):
    context = {
        'title': "Петербургские баталии",
        'prev': "linder_first_russian_masters_hardin",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_pisma_iz_samary"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/09-01-Петербургские баталии.htm", context)

def linder_first_russian_masters_letters_from_samara(request):
    context = {
        'title': "Письма из Самары",
        'prev': "linder_first_russian_masters_peterburgskie_batalii",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_otkrytie_v_gambite_evansa"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/09-02-Письма из Самары.htm", context)

def linder_first_russian_masters_discovery_in_evans_gambit(request):
    context = {
        'title': "Открытие в гамбите Эванса",
        'prev': "linder_first_russian_masters_pisma_iz_samary",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_poslednij_match"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/09-03-Открытие в гамбите Эванса.htm", context)

def linder_first_russian_masters_last_match(request):
    context = {
        'title': "Последний матч",
        'prev': "linder_first_russian_masters_otkrytie_v_gambite_evansa",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_shahmatnyj_partner_vladimira_ulyanova"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/09-04-Последний матч.htm", context)

def linder_first_russian_masters_chess_partner_of_vladimir_ulyanov(request):
    context = {
        'title': "Шахматный партнер Владимира Ульянова",
        'prev': "linder_first_russian_masters_poslednij_match",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_ukazatel_debyutov"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/09-05-Шахматный партнер Владимира Ульянова.htm", context)

def linder_first_russian_masters_opening_index(request):
    context = {
        'title': "Указатель дебютов",
        'prev': "linder_first_russian_masters_shahmatnyj_partner_vladimira_ulyanova",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_ukazatel_partij_i_okonchanij"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/10-Указатель дебютов.htm", context)

def linder_first_russian_masters_parts_and_endings_index(request):
    context = {
        'title': "Указатель партий и окончаний",
        'prev': "linder_first_russian_masters_ukazatel_debyutov",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_literatura_i_istochniki"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/11-Указатель партий и окончаний.htm", context)

def linder_first_russian_masters_literature_and_sources(request):
    context = {
        'title': "Литература и источники",
        'prev': "linder_first_russian_masters_ukazatel_partij_i_okonchanij",
        'home': "linder_first_russian_masters_index",
        'next': "linder_first_russian_masters_index"
    }
    return render(request, "Первые_русские_мастера_(Линдер,_1979)/12-Литература и источники.htm", context)

