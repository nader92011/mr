var presets = {
	"modern": { "name": "Modern", "order": "hw4,sg,ll,ls,ha" },
	"default": { "name": "Default", "order": "hw4,ll,ls,la,sg,ha,br,pr,aan,mgf,vi,kz,mr,mn,uqw,umr,ums,umj,ulq,uqa,uqq" },
	"urdu": { "name": "Urdu", "order": "uqw,umr,ums,umj,ulq,uqa,uqq" },
	"quran": { "name": "Quran", "order": "br,pr,aan,mgf,vi,dhq,ll,ls,mis,la,amr,auh,umr,ulq,uqa,uqq" },
	"ll_ls": { "name": "LL only", "order": "ll,ls" },
	"arabic": { "name": "Arabic", "order": "amj,la,ayn,tla,amr,asb,mht,auh,msb,mis" },
	"english": { "name": "English", "order": "hw4,ll,ls,sg,ha,br,pr,aan,vi,mgf" },
	"fr": { "name": "French", "order": "kz" },
	"my": { "name": "Malay", "order": "mr,ens,mn" },
	"in": { "name": "Indonesian", "order": "mn,mr,ens" },
	"eg": { "name": "Egyptian", "order": "bdw" }
}

var project = {
	"info": "The largest collection of Arabic Root based dictionaries, all on one page!",
	"intro": "Arabic Almanac",
	"title": "Arabic Almanac",
	"version": "6.2",
	"prefix": "aa6_",
	"icon": "aa.ico"
}

/*
	"": { "name": "", "color": "",
		"index": , "direction": "ltr", "columns": "2",
		"offset": , "startpage": , "image-prefix": "" },
*/

var books = {
	"hw4": { "name": "Hans Wehr 4th ed.", "color": "Salmon",
		"index": hw4, "direction": "ltr", "columns": "2",
		"offset": 14, "startpage": 14, "image-prefix": "hw4" },
	"ll": { "name": "Lane's Lexicon", "color": "lawngreen",
		// inc. supplement: var ll_volumes = [404, 473, 446, 481, 504, 259, 277, 318];
		// but without supplement:
		"volumes": [404, 473, 446, 481, 504, 259, 277, 234], 
		"new_chapter_for_letter": true,
		"index": ll, "direction": "ltr", "columns": "3",
		"offset": 38, "startpage": 38, "image-prefix": "ll" },
	"ls": { "name": "LL Suplement", "color": "palegreen",
		"index": ls, "direction": "ltr", "columns": "3",
		"offset": 1, "startpage": 1, "image-prefix": "ls" },
	"la": { "name": "Lisan al-Arab (Arabic)", "color": "Goldenrod",
		"index": la, "direction": "rtl", "columns": "3",
		"offset": 1, "startpage": 1, "image-prefix": "la" },
	"sg": { "name": "Steingass", "color": "turquoise",
		"index": sg, "direction": "ltr", "columns": "2",
		"offset": 20, "startpage": 20, "image-prefix": "sg" },
	"ha": { "name": "Hava", "color": "gold",
		"index": ha, "direction": "rtl", "columns": "2",
		"offset": 21, "startpage": 21, "image-prefix": "ha" },
	"br": { "name": "Brill", "color": "magenta",
		"index": br, "direction": "ltr", "columns": "1",
		"offset": 26, "startpage": 26, "image-prefix": "br" },
	"pr": { "name": "Dict. and Glos of Quran by Penrice", "color": "orchid",
		"index": pr, "direction": "ltr", "columns": "2",
		"offset": 9, "startpage": 9, "image-prefix": "pr" },
	"vi": { "name": "Verbal Idoms of Quran", "color": "violet",
		"index": vi, "direction": "ltr", "columns": "1",
		"offset": 51, "startpage": 51, "image-prefix": "vi" },
	"mgf": { "name": "Dict. of Quran by M.G. Farid", "color": "orange",
		"index": mgf, "direction": "ltr", "columns": "1",
		"offset": 33, "startpage": 33, "image-prefix": "mgf" },
	"mr": { "name": "Marbawi (Malay/Jawi)", "color": "Tan", 
		"index": mr, "direction": "rtl", "columns": "2", 
		"offset": 25, "startpage": 25, "image-prefix": "mar" },
	"mn": { "name": "al Munawwir (Indonesian)", "color": "Moccasin",
		"index": mn, "direction": "rtl", "columns": "2",
		"offset": 1, "startpage": 1, "image-prefix": "imn" },
	"aan": { "name": "Vocab of Quran by A.A. Nadwi", "color": "slateblue",
		"index": vq, "direction": "rtl", "columns": "2",
		"offset": 24, "startpage": 24, "image-prefix": "aan" },
	"kz": { "name": "Kazimirski (French)", "color": "PaleGoldenrod", 
		"index": kz, "direction": "ltr", "columns": "2", 
		"offset": 10, "startpage": 10, "image-prefix": "kaz" },
	"uqq": { "name": "Qaamoos Alfaaz al Qur'an (Urdu)", "color": "palegreen",
		"index": uqq, "direction": "rtl", "columns": "3",
		"offset": 2, "startpage": 2, "image-prefix": "uqq" },
	"ulq": { "name": "Lughaat al-Quran (Urdu)", "color": "skyblue",
		"index": ulq, "direction": "rtl", "columns": "1",
		"offset": 247, "startpage": 247, "image-prefix": "ulq" },
	"uqa": { "name": "Alfaaz Istilihaat al-Quran (Urdu)", "color": "steelblue",
		"index": uqa, "direction": "rtl", "columns": "1",
		"offset": 17, "startpage": 17, "image-prefix": "uqa" },
	"uqw": { "name": "Qamoos al-Waheed (Urdu)", "color": "Salmon",
		"index": uqw, "direction": "rtl", "columns": "3",
		"offset": 106, "startpage": 106, "image-prefix": "uqw" },
	"umr": { "name": "Mufradaat Alfaaz al-Quran (Urdu)", "color": "lawngreen",
		"index": umr, "direction": "rtl", "columns": "2",
		"offset": 26, "startpage": 26, "image-prefix": "umr" },
	"ums": { "name": "Mukhtaar as-Sahih", "color": "gold",
		"index": ums, "direction": "rtl", "columns": "2",
		"offset": 14, "startpage": 14, "image-prefix": "ums" },
	"umj": { "name": "al-Munjid (Urdu)", "color": "slateblue",
		"index": umj, "direction": "rtl", "columns": "3",
		"offset": 34, "startpage": 34, "image-prefix": "umj" },
	"bdw": { "name": "Hind/Badawi (Egyptian)", "color": "orangered",
		"index": bdw, "direction": "ltr", "columns": "2",
		"offset": 19, "startpage": 19, "image-prefix": "bdw" },
	"amr": { "name": "Mufradat ar Raghib (Arabic)", "color": "aquamarine",
		"index": amr, "direction": "rtl", "columns": "2",
		"offset": 7, "startpage": 7, "image-prefix": "amr" },
	"asb": { "name": "Asaas al Balaaghah by Zamakhshari (Arabic)", "color": "skyblue",
		"index": asb, "direction": "rtl", "columns": "2",
		"offset": 17, "startpage": 17, "image-prefix": "asb" },
	"auh": { "name": "Umdat ul Huffaaz (Arabic)", "color": "turquoise",
		"index": auh, "direction": "rtl", "columns": "1",
		"offset": 37, "startpage": 37, "image-prefix": "auh" },
	"dhq": { "name": "Dictionary of the Holy Quran", "color": "gold",
		"index": dhq, "direction": "ltr", "columns": "2",
		"offset": 2, "startpage": 2, "image-prefix": "dhq" },
	"mht": { "name": "Muheet al-Muheet (Arabic)", "color": "DeepSkyBlue",
		"index": mht, "direction": "rtl", "columns": "3",
		"offset": 6, "startpage": 6, "image-prefix": "mht" },
	"msb": { "name": "Misbaah ul Muneer by Fuyyumi (Arabic)", "color": "DodgerBlue",
		"index": msb, "direction": "rtl", "columns": "2",
		"offset": 8, "startpage": 8, "image-prefix": "msb" },
	"tla": { "name": "Tasheeh Lisan ul Arab (Arabic)", "color": "DarkGoldenrod",
		"index": tla, "direction": "rtl", "columns": "1",
		"offset": 8, "startpage": 6, "image-prefix": "tla" },
	"amj": { "name": "Al-Munjid (Arabic)", "color": "Salmon",
		"index": amj, "direction": "rtl", "columns": "3",
		"offset": 22, "startpage": 22, "image-prefix": "amj" },
	"ens": { "name": "Ensiklopedia Al-Quran: Kajian Kosa Kata, Quraish Shihab (Malay)", "color": "Khaki",
		"index": ens, "direction": "ltr", "columns": "2",
		"offset": 1, "startpage": 1, "image-prefix": "ens",
		"alpha": "no" },
	"mis": { "name": "Mujam istiqaqy alMuassal lilAlfadh ilQuran ilKareem (Arabic)", "color": "violet",
		"index": mis, "direction": "ltr", "columns": "1",
		"offset": 1, "startpage": 1, "image-prefix": "mis",
		"alpha": "no" },
	// "alpha": "no" means: this book is not alphabetical
	"qab": { "name": "Quranic Arabic, by Mohd Yaehia (Bangla)", "color": "white",
		"index": qab, "direction": "ltr", "columns": "1",
		"offset": 1, "startpage": 1, "image-prefix": "qab",
		"alpha": "yes" },
	"ayn": { "name": "Kitab al Ayn by ...", "color": "white",
		"index": ayn, "direction": "ltr", "columns": "1",
		"offset": 1, "startpage": 1, "image-prefix": "ayn",
		"alpha": "yes" },
	"cqk": { "name": "Concordance of Quran by H. Kennis (Eng)", "color": "white",
		"index": cqk, "direction": "ltr", "columns": "1",
		"offset": 1, "startpage": 1, "image-prefix": "cqk",
		"alpha": "no" },
	"cql": { "name": "Concordance of Quran by L. Bakhtiar (Eng)", "color": "white",
		"index": cql, "direction": "ltr", "columns": "2",
		"offset": 1, "startpage": 1, "image-prefix": "cql",
		"alpha": "no" },
	"cqm": { "name": "Mu'jam Almufahras lil Alfaz il Quran by ... (Ar)", "color": "white",
		"index": cqm, "direction": "rtl", "columns": "2",
		"offset": 1, "startpage": 1, "image-prefix": "cqm",
		"alpha": "yes" },
	"elq": { "name": "Lughat ul Quran by G. A. Parwez (Eng)", "color": "white",
		"index": elq, "direction": "ltr", "columns": "1",
		"offset": 1, "startpage": 1, "image-prefix": "elq",
		"alpha": "no" },
	"mml": { "name": "Kitab al Ayn by ...", "color": "white",
		"index": mml, "direction": "ltr", "columns": "1",
		"offset": 1, "startpage": 1, "image-prefix": "mml",
		"alpha": "no" },
	"mmt": { "name": "Mufradaat Ut Talib (Ar)", "color": "white",
		"index": mmt, "direction": "ltr", "columns": "1",
		"offset": 1, "startpage": 1, "image-prefix": "mmt",
		"alpha": "yes" },
	"mqf": { "name": "Kitab al Ayn by ...", "color": "white",
		"index": mqf, "direction": "ltr", "columns": "1",
		"offset": 1, "startpage": 1, "image-prefix": "mqf",
		"alpha": "no" }
}

