
export interface Student {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  phone: string;
}

// Parse the student data
const parseStudentData = (rawData: string): Student[] => {
  // Split the raw data into lines
  const lines = rawData.trim().split('\n');
  
  // Process each line
  return lines.map((line) => {
    const [id, lastName, firstName, phone] = line.trim().split('\t');
    const fullName = `${firstName} ${lastName}`;
    
    return {
      id,
      fullName,
      firstName,
      lastName,
      phone
    };
  });
};

// Raw student data
const rawStudentData = `10316444	APOYONBILA	JACOB	0537103367
10316806	AGYAPONG	BRIGHT	0500314051
10317834	KODUA	FREDERICK  OWUSU	0543557479
10318408	ALHASSAN	ABASS	0554763944
10318416	AYESU	NOELLA NANA YAA EYIRAM	0244664258
10318534	GHUNNEY	RICHARD KWAME	0256231376
10318545	SULEMANA	WADUDU	0559952548
10318607	AMOAH	EDWARD	0538684101
10318608	OFOSUHENE	IRENE EWURABENA	0594947185
10319497	SEIDU	ABDUL-HAFEEZ	0545334764
10319498	TWENEBOA-KODUA	GILBERT	0244203857
10319995	KPENDO	ABRAHAM ASIWOME	0532370080
10320032	YAKUBU	LUKMAN	0257243617
10320036	DAPAAH	MICHAEL NANA	0599440667
10320042	TWUM	DANIEL BARIMAH	0247691333
10320052	NDEDE KOJO	KORKOR	0209757590
10320090	AGYAPONG	VALERIO	0530190602
10320100	ABDULAI	MARIWAN	0535456033
10322357	ADAMS	EMELIA MARIAM NAA OKAILEY	0205448709
10322388	QUAMPAH	ELEAZER ELIKEM	0204620685
10322399	ASUBONTENG	DAPHNE NADINE	0244292627
10322450	ATUIMAH	GABRIEL  AWENTEMI	0201861591
10322492	DUODU	NATHANIEL OTENG	0598334930
10322498	TETTEH	PHILIP JOE	0535564354
10322505	GYASI	KWABENA BOATENG	0502256660
10322513	DEBRAH	JOYCE AKOSUA ANIMWAA	0535931303
10322514	ZAKARIAH	ADIL TIYUMTABA	0201517075
10322524	SALIFU	RAYAAN MWINIBALONNO	0203785715
10322541	DJAN	FERDINAND	0208528902
10322549	ANTWI	BERNICE  AMA	0550109705
10322573	EGLEH	PRINCE NANA KWESI	0534375880
10322583	NKRUMAH	BRIGHT	0539643986
10322621	APPIAH	NANA YAW  SARFO	0243108391
10322623	QUARM	DUKE	0244611780
10322671	AFFUL-ESHUN	MICHAEL	0202173100
10322676	AYARAH	SOLOMON	0543060277
10322677	TUMPI	RUTH WESONI	0260927119
10322692	YARTEY	CYRIL KANNIETEY	0505863881
10322773	SEMANHYIA	JOSHUA YAW	0256789397
10322804	SELORMEY	FREDRICA SEYRAM PRINCESS	0538556840
10322805	ABDUL SAMAD	SUFYAN SULLEY	0595311274
10322807	OBENG	ERIC	0508782648
10322840	KOTEY	DAVID SYLVESTER AMON	0539052078
10322863	YAKUBU	SHAKIR	0531696731
10322882	AKOTUAH	HILLARY  DARKO	0532678575
10322897	AMEVOR	ELIKEM RAHMAN	0538173453
10322904	NYARKO	SAMUEL ADU	0596143427
10322913	HAYFORD	MAJESTY NANA ABA OTOA	0531914332
10322929	HAMMOND	BENJAMIN ADOTEY	0244369199
10322963	TEI-WAYO	DEDO NAOMI	0202046673
10322966	FRIMPONG	KEVIN	0261629209
10323156	APPIAH	WILLIAM  KWAME	0598228564
10323398	AGYEMANG	DENNIS DUAH	0548823734
10324780	OWUSU	NANA  YAW	0530404058
10326313	AMOAKO	CELESTINE  AYEYIE	0557130812
10326591	HEVI	NEWMAN SENANU	0538605005
10326609	OWUSU	BERNARD NANA KWAME	0553622954
10326622	NYAMAAH	JOSEPH	0556691682
10326623	TAKYI	BRIGHT KWADWO	0541012945
10326628	ALORWU	EPHRAIM  KWAKU	0554636018
10326738	ADU-GYAMFI	KELVIN BAFFOUR	0507392290
10326741	KPABITEY	ISAAC	0538415491
10326909	AMISSAH	OWUSU PRINCE	0532425987
10327103	OWUSU-BOATENG	FRANK	0248263477
10327113	ABBEY	TESTIMONY	0243777232
10327205	AMARKWEI	NII AMARH	0552056967
10327207	TAWIAH	FRANCISCA DEDE	0548426544
10327384	KWAPONG	FAUSTUS NANA KWESI	0576186344
10327404	SAKIB	SALAM ABDUL	0555418840
10327407	ODOI	EMMANUEL	0591057314
10327412	ACKUMEY	DONATUS  KWAME	0533896209
10327419	APPIAH	MAXWELL  AGYEPONG	0530468555
10327428	DWOMOH	ANNA	0553572748
10327431	NYANSAH	MAUD KWAKYEBIA	0530146119
10327432	AFANU	FANTAZIA ABLA	0279936999
10327462	APAU	JONATHAN ADU	0257733273
10327739	ABUKANALA	EUGENIA AWENLIE	0534771107
10327868	BUABENG	FREDERICK OFORI	0598816388
10327870	KWAPONG	SAHNAN KOFI	0546686726
10327876	SARKODIE	ADUBEA	0205661589
10327877	QUANSAH	BENEDICT	0549392518
10327954	BORTEY	MCANDREW	0241639641
10327964	SANUSI	RABIU	0591341505
10327967	GRANT	PAA KWESI	0556144013
10327968	MENSAH	PRINCE BOTCHWAY	233241000000
10328040	OFEI	FRANKLIN	0595831433
10328043	BAAH	KELVIN OSEI-DANSO	0536384298
10328071	ASANTE	EMMANUEL  ADOM	0205053095
10328125	QUARSHIE	KLINSMANN KOJO	0557799166
10328126	DUODU	RYAN ASARE	0244203588
10328133	BLANKSON	EUNICE AFEDIWA	0595286682
10328142	APONSAH	ISAAC NII DOUDO	0597365642
10328147	TACKIE-OTOO	GEORGE	0503305300
10328221	KLUTSE	WILLLIAM MAWULI	0559055630
10328223	TSEWU	LINDA ESINAM	0504179119
10328252	BUCKNOR	CAREL	0594063217
10328278	OSEI	PHINEHAS ADU	0577036331
10328326	BALABUNG	JESALI	0256413120
10328357	BOADI	GRISILDA HAYFORD	0552499615
10328362	BONAH	ROCKSON	0551913215
10328421	DANSO DAPAAH	KEZIAH KUUKUWA	0531210752
10328482	LARYEA	SAMUEL	0246202411
10328486	POKU	CLIVE ELIKEM	0244981030
10328510	BOAME ANANE	ABUNYUWA	0530932263
10328717	AYIGLO	JOSHUA  EDEM	0596181826`;

export const students = parseStudentData(rawStudentData);

// Export a function to find a student by ID
export const findStudentById = (id: string): Student | undefined => {
  return students.find(student => student.id === id);
};

// Export a function to get a random student
export const getRandomStudent = (): Student => {
  const randomIndex = Math.floor(Math.random() * students.length);
  return students[randomIndex];
};

// Export a function to get a specified number of random students
export const getRandomStudents = (count: number): Student[] => {
  const shuffled = [...students].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
