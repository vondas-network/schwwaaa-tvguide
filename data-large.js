const data = [
  {
    channel: "HBO",
    number: "501",
    schedule: [
      { time: "12:00 AM", title: "HBO Program 1" },
      { time: "12:58 AM", title: "Commercial Break" },
      { time: "12:58 AM", title: "HBO Program 2" },
      { time: "1:56 AM", title: "Commercial Break" },
      { time: "1:57 AM", title: "Station ID / Padding" },
      { time: "1:58 AM", title: "HBO Program 3" },
      { time: "2:56 AM", title: "Commercial Break" },
      { time: "2:56 AM", title: "HBO Program 4" },
      { time: "3:54 AM", title: "Commercial Break" },
      { time: "3:55 AM", title: "Station ID / Padding" },
      { time: "3:56 AM", title: "HBO Program 5" },
      { time: "4:54 AM", title: "Commercial Break" },
      { time: "4:54 AM", title: "HBO Program 6" },
      { time: "5:52 AM", title: "Commercial Break" },
      { time: "5:53 AM", title: "Station ID / Padding" },
      { time: "5:54 AM", title: "HBO Program 7" },
      { time: "6:52 AM", title: "Commercial Break" },
      { time: "6:52 AM", title: "HBO Program 8" },
      { time: "7:50 AM", title: "Commercial Break" },
      { time: "7:51 AM", title: "Station ID / Padding" },
      { time: "7:52 AM", title: "HBO Program 9" },
      { time: "8:50 AM", title: "Commercial Break" },
      { time: "8:50 AM", title: "HBO Program 10" },
      { time: "9:48 AM", title: "Commercial Break" },
      { time: "9:49 AM", title: "Station ID / Padding" },
      { time: "9:50 AM", title: "HBO Program 11" },
      { time: "10:48 AM", title: "Commercial Break" },
      { time: "10:48 AM", title: "HBO Program 12" },
      { time: "11:46 AM", title: "Commercial Break" },
      { time: "11:47 AM", title: "Station ID / Padding" },
      { time: "11:48 AM", title: "HBO Program 13" },
      { time: "12:46 PM", title: "Commercial Break" },
      { time: "12:46 PM", title: "HBO Program 14" },
      { time: "1:44 PM", title: "Commercial Break" },
      { time: "1:45 PM", title: "Station ID / Padding" },
      { time: "1:46 PM", title: "HBO Program 15" },
      { time: "2:44 PM", title: "Commercial Break" },
      { time: "2:44 PM", title: "HBO Program 16" },
      { time: "3:42 PM", title: "Commercial Break" },
      { time: "3:43 PM", title: "Station ID / Padding" },
      { time: "3:44 PM", title: "HBO Program 17" },
      { time: "4:42 PM", title: "Commercial Break" },
      { time: "4:42 PM", title: "HBO Program 18" },
      { time: "5:40 PM", title: "Commercial Break" },
      { time: "5:41 PM", title: "Station ID / Padding" },
      { time: "5:42 PM", title: "HBO Program 19" },
      { time: "6:40 PM", title: "Commercial Break" },
      { time: "6:40 PM", title: "HBO Program 20" },
      { time: "7:38 PM", title: "Commercial Break" },
      { time: "7:39 PM", title: "Station ID / Padding" },
      { time: "7:40 PM", title: "HBO Program 21" },
      { time: "8:38 PM", title: "Commercial Break" },
      { time: "8:38 PM", title: "HBO Program 22" },
      { time: "9:36 PM", title: "Commercial Break" },
      { time: "9:37 PM", title: "Station ID / Padding" },
      { time: "9:38 PM", title: "HBO Program 23" },
      { time: "10:36 PM", title: "Commercial Break" },
      { time: "10:36 PM", title: "HBO Program 24" },
      { time: "11:34 PM", title: "Commercial Break" },
      { time: "11:35 PM", title: "Station ID / Padding" }
    ]
  },
  {
    channel: "ESPN",
    number: "402",
    schedule: [
      { time: "12:00 AM", title: "ESPN Program 1" },
      { time: "12:58 AM", title: "Commercial Break" },
      { time: "12:58 AM", title: "ESPN Program 2" },
      { time: "1:56 AM", title: "Commercial Break" },
      { time: "1:57 AM", title: "Station ID / Padding" },
      { time: "1:58 AM", title: "ESPN Program 3" },
      { time: "2:56 AM", title: "Commercial Break" },
      { time: "2:56 AM", title: "ESPN Program 4" },
      { time: "3:54 AM", title: "Commercial Break" },
      { time: "3:55 AM", title: "Station ID / Padding" },
      { time: "3:56 AM", title: "ESPN Program 5" },
      { time: "4:54 AM", title: "Commercial Break" },
      { time: "4:54 AM", title: "ESPN Program 6" },
      { time: "5:52 AM", title: "Commercial Break" },
      { time: "5:53 AM", title: "Station ID / Padding" },
      { time: "5:54 AM", title: "ESPN Program 7" },
      { time: "6:52 AM", title: "Commercial Break" },
      { time: "6:52 AM", title: "ESPN Program 8" },
      { time: "7:50 AM", title: "Commercial Break" },
      { time: "7:51 AM", title: "Station ID / Padding" },
      { time: "7:52 AM", title: "ESPN Program 9" },
      { time: "8:50 AM", title: "Commercial Break" },
      { time: "8:50 AM", title: "ESPN Program 10" },
      { time: "9:48 AM", title: "Commercial Break" },
      { time: "9:49 AM", title: "Station ID / Padding" },
      { time: "9:50 AM", title: "ESPN Program 11" },
      { time: "10:48 AM", title: "Commercial Break" },
      { time: "10:48 AM", title: "ESPN Program 12" },
      { time: "11:46 AM", title: "Commercial Break" },
      { time: "11:47 AM", title: "Station ID / Padding" },
      { time: "11:48 AM", title: "ESPN Program 13" },
      { time: "12:46 PM", title: "Commercial Break" },
      { time: "12:46 PM", title: "ESPN Program 14" },
      { time: "1:44 PM", title: "Commercial Break" },
      { time: "1:45 PM", title: "Station ID / Padding" },
      { time: "1:46 PM", title: "ESPN Program 15" },
      { time: "2:44 PM", title: "Commercial Break" },
      { time: "2:44 PM", title: "ESPN Program 16" },
      { time: "3:42 PM", title: "Commercial Break" },
      { time: "3:43 PM", title: "Station ID / Padding" },
      { time: "3:44 PM", title: "ESPN Program 17" },
      { time: "4:42 PM", title: "Commercial Break" },
      { time: "4:42 PM", title: "ESPN Program 18" },
      { time: "5:40 PM", title: "Commercial Break" },
      { time: "5:41 PM", title: "Station ID / Padding" },
      { time: "5:42 PM", title: "ESPN Program 19" },
      { time: "6:40 PM", title: "Commercial Break" },
      { time: "6:40 PM", title: "ESPN Program 20" },
      { time: "7:38 PM", title: "Commercial Break" },
      { time: "7:39 PM", title: "Station ID / Padding" },
      { time: "7:40 PM", title: "ESPN Program 21" },
      { time: "8:38 PM", title: "Commercial Break" },
      { time: "8:38 PM", title: "ESPN Program 22" },
      { time: "9:36 PM", title: "Commercial Break" },
      { time: "9:37 PM", title: "Station ID / Padding" },
      { time: "9:38 PM", title: "ESPN Program 23" },
      { time: "10:36 PM", title: "Commercial Break" },
      { time: "10:36 PM", title: "ESPN Program 24" },
      { time: "11:34 PM", title: "Commercial Break" },
      { time: "11:35 PM", title: "Station ID / Padding" }
    ]
  },
  {
    channel: "CBS",
    number: "303",
    schedule: [
      { time: "12:00 AM", title: "CBS Program 1" },
      { time: "12:58 AM", title: "Commercial Break" },
      { time: "12:58 AM", title: "CBS Program 2" },
      { time: "1:56 AM", title: "Commercial Break" },
      { time: "1:57 AM", title: "Station ID / Padding" },
      { time: "1:58 AM", title: "CBS Program 3" },
      { time: "2:56 AM", title: "Commercial Break" },
      { time: "2:56 AM", title: "CBS Program 4" },
      { time: "3:54 AM", title: "Commercial Break" },
      { time: "3:55 AM", title: "Station ID / Padding" },
      { time: "3:56 AM", title: "CBS Program 5" },
      { time: "4:54 AM", title: "Commercial Break" },
      { time: "4:54 AM", title: "CBS Program 6" },
      { time: "5:52 AM", title: "Commercial Break" },
      { time: "5:53 AM", title: "Station ID / Padding" },
      { time: "5:54 AM", title: "CBS Program 7" },
      { time: "6:52 AM", title: "Commercial Break" },
      { time: "6:52 AM", title: "CBS Program 8" },
      { time: "7:50 AM", title: "Commercial Break" },
      { time: "7:51 AM", title: "Station ID / Padding" },
      { time: "7:52 AM", title: "CBS Program 9" },
      { time: "8:50 AM", title: "Commercial Break" },
      { time: "8:50 AM", title: "CBS Program 10" },
      { time: "9:48 AM", title: "Commercial Break" },
      { time: "9:49 AM", title: "Station ID / Padding" },
      { time: "9:50 AM", title: "CBS Program 11" },
      { time: "10:48 AM", title: "Commercial Break" },
      { time: "10:48 AM", title: "CBS Program 12" },
      { time: "11:46 AM", title: "Commercial Break" },
      { time: "11:47 AM", title: "Station ID / Padding" },
      { time: "11:48 AM", title: "CBS Program 13" },
      { time: "12:46 PM", title: "Commercial Break" },
      { time: "12:46 PM", title: "CBS Program 14" },
      { time: "1:44 PM", title: "Commercial Break" },
      { time: "1:45 PM", title: "Station ID / Padding" },
      { time: "1:46 PM", title: "CBS Program 15" },
      { time: "2:44 PM", title: "Commercial Break" },
      { time: "2:44 PM", title: "CBS Program 16" },
      { time: "3:42 PM", title: "Commercial Break" },
      { time: "3:43 PM", title: "Station ID / Padding" },
      { time: "3:44 PM", title: "CBS Program 17" },
      { time: "4:42 PM", title: "Commercial Break" },
      { time: "4:42 PM", title: "CBS Program 18" },
      { time: "5:40 PM", title: "Commercial Break" },
      { time: "5:41 PM", title: "Station ID / Padding" },
      { time: "5:42 PM", title: "CBS Program 19" },
      { time: "6:40 PM", title: "Commercial Break" },
      { time: "6:40 PM", title: "CBS Program 20" },
      { time: "7:38 PM", title: "Commercial Break" },
      { time: "7:39 PM", title: "Station ID / Padding" },
      { time: "7:40 PM", title: "CBS Program 21" },
      { time: "8:38 PM", title: "Commercial Break" },
      { time: "8:38 PM", title: "CBS Program 22" },
      { time: "9:36 PM", title: "Commercial Break" },
      { time: "9:37 PM", title: "Station ID / Padding" },
      { time: "9:38 PM", title: "CBS Program 23" },
      { time: "10:36 PM", title: "Commercial Break" },
      { time: "10:36 PM", title: "CBS Program 24" },
      { time: "11:34 PM", title: "Commercial Break" },
      { time: "11:35 PM", title: "Station ID / Padding" }
    ]
  },
  {
    channel: "NBC",
    number: "304",
    schedule: [
      { time: "12:00 AM", title: "NBC Program 1" },
      { time: "12:58 AM", title: "Commercial Break" },
      { time: "12:58 AM", title: "NBC Program 2" },
      { time: "1:56 AM", title: "Commercial Break" },
      { time: "1:57 AM", title: "Station ID / Padding" },
      { time: "1:58 AM", title: "NBC Program 3" },
      { time: "2:56 AM", title: "Commercial Break" },
      { time: "2:56 AM", title: "NBC Program 4" },
      { time: "3:54 AM", title: "Commercial Break" },
      { time: "3:55 AM", title: "Station ID / Padding" },
      { time: "3:56 AM", title: "NBC Program 5" },
      { time: "4:54 AM", title: "Commercial Break" },
      { time: "4:54 AM", title: "NBC Program 6" },
      { time: "5:52 AM", title: "Commercial Break" },
      { time: "5:53 AM", title: "Station ID / Padding" },
      { time: "5:54 AM", title: "NBC Program 7" },
      { time: "6:52 AM", title: "Commercial Break" },
      { time: "6:52 AM", title: "NBC Program 8" },
      { time: "7:50 AM", title: "Commercial Break" },
      { time: "7:51 AM", title: "Station ID / Padding" },
      { time: "7:52 AM", title: "NBC Program 9" },
      { time: "8:50 AM", title: "Commercial Break" },
      { time: "8:50 AM", title: "NBC Program 10" },
      { time: "9:48 AM", title: "Commercial Break" },
      { time: "9:49 AM", title: "Station ID / Padding" },
      { time: "9:50 AM", title: "NBC Program 11" },
      { time: "10:48 AM", title: "Commercial Break" },
      { time: "10:48 AM", title: "NBC Program 12" },
      { time: "11:46 AM", title: "Commercial Break" },
      { time: "11:47 AM", title: "Station ID / Padding" },
      { time: "11:48 AM", title: "NBC Program 13" },
      { time: "12:46 PM", title: "Commercial Break" },
      { time: "12:46 PM", title: "NBC Program 14" },
      { time: "1:44 PM", title: "Commercial Break" },
      { time: "1:45 PM", title: "Station ID / Padding" },
      { time: "1:46 PM", title: "NBC Program 15" },
      { time: "2:44 PM", title: "Commercial Break" },
      { time: "2:44 PM", title: "NBC Program 16" },
      { time: "3:42 PM", title: "Commercial Break" },
      { time: "3:43 PM", title: "Station ID / Padding" },
      { time: "3:44 PM", title: "NBC Program 17" },
      { time: "4:42 PM", title: "Commercial Break" },
      { time: "4:42 PM", title: "NBC Program 18" },
      { time: "5:40 PM", title: "Commercial Break" },
      { time: "5:41 PM", title: "Station ID / Padding" },
      { time: "5:42 PM", title: "NBC Program 19" },
      { time: "6:40 PM", title: "Commercial Break" },
      { time: "6:40 PM", title: "NBC Program 20" },
      { time: "7:38 PM", title: "Commercial Break" },
      { time: "7:39 PM", title: "Station ID / Padding" },
      { time: "7:40 PM", title: "NBC Program 21" },
      { time: "8:38 PM", title: "Commercial Break" },
      { time: "8:38 PM", title: "NBC Program 22" },
      { time: "9:36 PM", title: "Commercial Break" },
      { time: "9:37 PM", title: "Station ID / Padding" },
      { time: "9:38 PM", title: "NBC Program 23" },
      { time: "10:36 PM", title: "Commercial Break" },
      { time: "10:36 PM", title: "NBC Program 24" },
      { time: "11:34 PM", title: "Commercial Break" },
      { time: "11:35 PM", title: "Station ID / Padding" }
    ]
  },
  {
    channel: "FOX",
    number: "305",
    schedule: [
      { time: "12:00 AM", title: "FOX Program 1" },
      { time: "12:58 AM", title: "Commercial Break" },
      { time: "12:58 AM", title: "FOX Program 2" },
      { time: "1:56 AM", title: "Commercial Break" },
      { time: "1:57 AM", title: "Station ID / Padding" },
      { time: "1:58 AM", title: "FOX Program 3" },
      { time: "2:56 AM", title: "Commercial Break" },
      { time: "2:56 AM", title: "FOX Program 4" },
      { time: "3:54 AM", title: "Commercial Break" },
      { time: "3:55 AM", title: "Station ID / Padding" },
      { time: "3:56 AM", title: "FOX Program 5" },
      { time: "4:54 AM", title: "Commercial Break" },
      { time: "4:54 AM", title: "FOX Program 6" },
      { time: "5:52 AM", title: "Commercial Break" },
      { time: "5:53 AM", title: "Station ID / Padding" },
      { time: "5:54 AM", title: "FOX Program 7" },
      { time: "6:52 AM", title: "Commercial Break" },
      { time: "6:52 AM", title: "FOX Program 8" },
      { time: "7:50 AM", title: "Commercial Break" },
      { time: "7:51 AM", title: "Station ID / Padding" },
      { time: "7:52 AM", title: "FOX Program 9" },
      { time: "8:50 AM", title: "Commercial Break" },
      { time: "8:50 AM", title: "FOX Program 10" },
      { time: "9:48 AM", title: "Commercial Break" },
      { time: "9:49 AM", title: "Station ID / Padding" },
      { time: "9:50 AM", title: "FOX Program 11" },
      { time: "10:48 AM", title: "Commercial Break" },
      { time: "10:48 AM", title: "FOX Program 12" },
      { time: "11:46 AM", title: "Commercial Break" },
      { time: "11:47 AM", title: "Station ID / Padding" },
      { time: "11:48 AM", title: "FOX Program 13" },
      { time: "12:46 PM", title: "Commercial Break" },
      { time: "12:46 PM", title: "FOX Program 14" },
      { time: "1:44 PM", title: "Commercial Break" },
      { time: "1:45 PM", title: "Station ID / Padding" },
      { time: "1:46 PM", title: "FOX Program 15" },
      { time: "2:44 PM", title: "Commercial Break" },
      { time: "2:44 PM", title: "FOX Program 16" },
      { time: "3:42 PM", title: "Commercial Break" },
      { time: "3:43 PM", title: "Station ID / Padding" },
      { time: "3:44 PM", title: "FOX Program 17" },
      { time: "4:42 PM", title: "Commercial Break" },
      { time: "4:42 PM", title: "FOX Program 18" },
      { time: "5:40 PM", title: "Commercial Break" },
      { time: "5:41 PM", title: "Station ID / Padding" },
      { time: "5:42 PM", title: "FOX Program 19" },
      { time: "6:40 PM", title: "Commercial Break" },
      { time: "6:40 PM", title: "FOX Program 20" },
      { time: "7:38 PM", title: "Commercial Break" },
      { time: "7:39 PM", title: "Station ID / Padding" },
      { time: "7:40 PM", title: "FOX Program 21" },
      { time: "8:38 PM", title: "Commercial Break" },
      { time: "8:38 PM", title: "FOX Program 22" },
      { time: "9:36 PM", title: "Commercial Break" },
      { time: "9:37 PM", title: "Station ID / Padding" },
      { time: "9:38 PM", title: "FOX Program 23" },
      { time: "10:36 PM", title: "Commercial Break" },
      { time: "10:36 PM", title: "FOX Program 24" },
      { time: "11:34 PM", title: "Commercial Break" },
      { time: "11:35 PM", title: "Station ID / Padding" }
    ]
  }
];
