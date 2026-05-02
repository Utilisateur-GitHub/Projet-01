/* ============================================================
   RésidanatPro — Sample Questions Data
   ============================================================ */

const QUESTIONS_DB = [
  {
    id: 1, specialty: 'Cardiologie', topic: 'Insuffisance cardiaque', difficulty: 'medium',
    type: 'mcq', year: 2024,
    text: 'Un patient de 65 ans consulte pour une dyspnée d\'effort progressive depuis 3 mois. L\'examen clinique révèle des crépitants bilatéraux, des œdèmes des membres inférieurs et un troisième bruit cardiaque. Quel est le médicament de première intention dans ce cas ?',
    options: ['Furosémide seul', 'IEC + Bêtabloquant', 'Digoxine seule', 'Amiodarone', 'Aucun traitement'],
    correct: 1,
    explanation: 'Dans l\'insuffisance cardiaque à fraction d\'éjection réduite (ICFEr), le traitement de fond repose sur l\'association IEC (ou ARA2/ARNI) + Bêtabloquant. Ces deux classes ont démontré une réduction de la mortalité. Le furosémide est utilisé pour les signes congestifs mais n\'a pas d\'effet sur le pronostic.',
    references: 'ESC Guidelines 2021, Chapitre Insuffisance Cardiaque'
  },
  {
    id: 2, specialty: 'Cardiologie', topic: 'SCA', difficulty: 'hard',
    type: 'mcq', year: 2023,
    text: 'Un homme de 55 ans se présente aux urgences pour une douleur thoracique typique depuis 2 heures. L\'ECG montre un sus-décalage ST en V1-V4. La troponine est négative à H0. Quelle est la prise en charge initiale ?',
    options: ['Attendre la troponine à H3', 'Angioplastie primaire immédiate', 'Thrombolyse IV', 'HBPM seul', 'Repos strict'],
    correct: 1,
    explanation: 'Devant un SCA ST+ (STEMI), l\'angioplastie primaire (PPCI) doit être réalisée dans les 90 min si disponible (120 min si transfert nécessaire). Ne pas attendre la troponine qui sera négative au début. La thrombolyse est une alternative si la PPCI n\'est pas disponible dans les délais.',
    references: 'ESC Guidelines STEMI 2023'
  },
  {
    id: 3, specialty: 'Neurologie', topic: 'AVC', difficulty: 'hard',
    type: 'mcq', year: 2024,
    text: 'Une patiente de 72 ans est amenée par les pompiers suite à un déficit moteur du membre supérieur droit et une aphasie, apparus brutalement il y a 2 heures. Les constantes sont stables. L\'IRM diffusion confirme un AVC ischémique. Quel est le traitement à envisager en premier ?',
    options: ['Aspirine IV 500mg', 'Thrombolyse IV (rt-PA) si éligible', 'Héparine non fractionnée', 'Corticoïdes IV', 'Traitement symptomatique seul'],
    correct: 1,
    explanation: 'La thrombolyse IV par rt-PA (alteplase) est indiquée dans les 4h30 suivant le début des symptômes, en l\'absence de contre-indications (TC récent, chirurgie récente, HTA non contrôlée, etc.). La thrombectomie mécanique peut être associée si occlusion d\'une grande artère.',
    references: 'ESC/ESO AVC 2023, HAS recommandations AVC'
  },
  {
    id: 4, specialty: 'Neurologie', topic: 'Épilepsie', difficulty: 'medium',
    type: 'mcq', year: 2022,
    text: 'Un patient de 30 ans présente une crise généralisée tonico-clonique en consultation. La crise dure depuis 8 minutes. Quelle est votre attitude immédiate ?',
    options: ['Attendre la fin naturelle de la crise', 'Diazépam IV ou rectal', 'Phénytoïne IV', 'Appel SAMU uniquement', 'Contention physique'],
    correct: 1,
    explanation: 'Devant un état de mal épileptique convulsif (crise > 5 min), le traitement en urgence est une benzodiazépine : diazépam (10mg rectal ou IV), ou midazolam IM/nasal/buccal. Si pas d\'accès IV : diazépam rectal ou midazolam IM. La phénytoïne est le traitement de 2ème ligne si les BZD échouent.',
    references: 'ILAE Guidelines 2022, HAS État de mal épileptique'
  },
  {
    id: 5, specialty: 'Pédiatrie', topic: 'Infections', difficulty: 'easy',
    type: 'mcq', year: 2023,
    text: 'Un enfant de 2 ans présente de la fièvre à 39,5°C depuis 3 jours, une otalgie droite et pleure beaucoup. L\'otoscopie révèle un tympan bombant, rouge et opaque à droite. Quel est le diagnostic le plus probable ?',
    options: ['Otite externe', 'Otite moyenne aiguë purulente', 'Mastoïdite', 'Cholestéatome', 'Corps étranger auriculaire'],
    correct: 1,
    explanation: 'L\'otite moyenne aiguë purulente (OMA) est caractérisée par : fièvre, otalgie, et à l\'otoscopie un tympan bombant, érythémateux, opaque avec disparition du triangle lumineux. Elle est due principalement à Streptococcus pneumoniae et Haemophilus influenzae. Traitement : amoxicilline chez les < 2 ans.',
    references: 'HAS Antibiothérapie pédiatrique OMA 2021'
  },
  {
    id: 6, specialty: 'Pédiatrie', topic: 'Nutrition', difficulty: 'easy',
    type: 'mcq', year: 2022,
    text: 'Concernant l\'allaitement maternel, quelle affirmation est VRAIE ?',
    options: ['Il est contre-indiqué en cas de mastite', 'Il protège contre les infections gastro-intestinales', 'Il ne modifie pas le risque d\'allergie', 'Il doit être arrêté à 6 mois au maximum', 'Il est incompatible avec une reprise du travail'],
    correct: 1,
    explanation: 'L\'allaitement maternel est associé à une réduction significative des infections gastro-intestinales et respiratoires grâce aux IgA sécrétoires et aux facteurs bioactifs du lait maternel. L\'OMS recommande un allaitement exclusif jusqu\'à 6 mois, puis mixte jusqu\'à 2 ans. La mastite n\'est pas une contre-indication à l\'allaitement.',
    references: 'OMS Guidelines allaitement maternel, AAP 2022'
  },
  {
    id: 7, specialty: 'Pharmacologie', topic: 'Antibiotiques', difficulty: 'medium',
    type: 'mcq', year: 2024,
    text: 'Parmi les antibiotiques suivants, lequel est contre-indiqué chez la femme enceinte à partir du 2ème trimestre ?',
    options: ['Amoxicilline', 'Pénicilline G', 'Tétracyclines', 'Érythromycine', 'Céfalexine'],
    correct: 2,
    explanation: 'Les tétracyclines sont contre-indiquées dès le 2ème trimestre de la grossesse car elles se déposent dans les os et les dents en développement du fœtus, provoquant une coloration définitive des dents de lait et une inhibition de la croissance osseuse. Les pénicillines et les céphalosporines sont considérées sûres pendant la grossesse.',
    references: 'CRAT (Centre de Référence Agents Tératogènes), ANSM'
  },
  {
    id: 8, specialty: 'Pharmacologie', topic: 'Antihypertenseurs', difficulty: 'medium',
    type: 'mcq', year: 2023,
    text: 'Un patient hypertendu diabétique de 55 ans présente une microalbuminurie. Quel antihypertenseur est à privilégier en première intention ?',
    options: ['Amlodipine', 'Hydrochlorothiazide', 'Inhibiteur de l\'enzyme de conversion', 'Atenolol', 'Doxazosine'],
    correct: 2,
    explanation: 'Les IEC (et les ARA2 en cas d\'intolérance) sont les antihypertenseurs de choix chez le diabétique avec microalbuminurie car ils ont un effet néphroprotecteur démontré : réduction de la progression vers la macroalbuminurie et la néphropathie diabétique. Ils réduisent aussi la mortalité cardiovasculaire.',
    references: 'ESC/ESH Guidelines HTA 2023, HAS Diabète type 2'
  },
  {
    id: 9, specialty: 'Chirurgie', topic: 'Urgences abdominales', difficulty: 'hard',
    type: 'mcq', year: 2024,
    text: 'Un homme de 45 ans est admis aux urgences pour douleur épigastrique intense irradiant en barre vers le dos, apparue brutalement après un repas copieux. Il présente des vomissements, une fièvre à 38.5°C. La lipasémie est à 3 fois la normale. Quel est le score permettant d\'évaluer la gravité ?',
    options: ['Score de Glasgow-Blatchford', 'Score de Ranson', 'Score APACHE II', 'Score de SOFA', 'Score de Balthazar'],
    correct: 1,
    explanation: 'Le score de Ranson évalue la sévérité de la pancréatite aiguë : à l\'admission (âge > 55 ans, GB > 16000, glycémie > 11 mmol/L, LDH > 350, ASAT > 250) et à H48. Un score ≥ 3 indique une pancréatite sévère. Le score de Balthazar est utilisé pour l\'imagerie. L\'Atlanta 2012 classe PA légère/modérément sévère/sévère.',
    references: 'IAP/APA Guidelines Pancréatite Aiguë 2013'
  },
  {
    id: 10, specialty: 'Maladies Infectieuses', topic: 'Méningites', difficulty: 'hard',
    type: 'mcq', year: 2023,
    text: 'Un jeune homme de 22 ans consulte pour céphalées, fièvre à 40°C et raideur de nuque. À l\'examen, vous notez un signe de Kernig positif. Avant d\'obtenir les résultats de la PL, quelle est l\'attitude thérapeutique ?',
    options: ['Attendre la PL avant tout traitement', 'Ceftriaxone IV + Dexaméthasone IV en urgence', 'Amoxicilline seule', 'Aciclovir seul', 'Ponction lombaire puis Amoxicilline'],
    correct: 1,
    explanation: 'Devant une suspicion de méningite bactérienne, l\'antibiothérapie par Ceftriaxone IV (2g x2/j) doit être démarrée en URGENCE, avant même la PL si délai > 30 min. La Dexaméthasone IV (0.15 mg/kg/6h, 4 jours) réduit la mortalité et les séquelles. La PL ne doit pas retarder l\'antibiothérapie.',
    references: 'SPILF Méningites bactériennes 2019, IDSA Guidelines 2018'
  },
  {
    id: 11, specialty: 'Urgences', topic: 'Réanimation', difficulty: 'hard',
    type: 'mcq', year: 2024,
    text: 'Un patient en arrêt cardio-respiratoire est pris en charge. Le massage cardiaque externe est en cours. Le monitorage ECG montre une fibrillation ventriculaire. Quelle est la prise en charge immédiate ?',
    options: ['Adrénaline 1mg IV immédiatement', 'Choc électrique externe 360 J biphasique', 'Amiodarone 300mg IV', 'Intubation trachéale en priorité', 'Lidocaïne IV'],
    correct: 1,
    explanation: 'La fibrillation ventriculaire (FV) est le rythme choquable par excellence. La défibrillation est la priorité absolue : choc électrique externe 200 J biphasique (ou 360 J monophasique) dès que possible. L\'adrénaline est donnée après le 3ème choc inefficace. Reprendre le MCE immédiatement après le choc sans vérifier le pouls.',
    references: 'ERC Guidelines 2021 RCP, ILCOR 2021'
  },
  {
    id: 12, specialty: 'Gynécologie', topic: 'Grossesse', difficulty: 'medium',
    type: 'mcq', year: 2022,
    text: 'Une femme enceinte de 32 SA est hospitalisée pour HTA à 150/100 mmHg. Elle présente des céphalées et des phosphènes. La protéinurie est à 1g/24h. Quel est le diagnostic ?',
    options: ['HTA gestationnelle isolée', 'Prééclampsie', 'Éclampsie', 'Hypertension chronique', 'HELLP syndrome'],
    correct: 1,
    explanation: 'La prééclampsie est définie par l\'HTA (≥ 140/90 mmHg) après 20 SA + protéinurie ≥ 300 mg/24h. Les céphalées et phosphènes sont des signes de gravité. L\'éclampsie se définit par l\'apparition de convulsions. Le HELLP syndrome associe hémolyse, cytolyse hépatique et thrombopénie.',
    references: 'HAS Prééclampsie 2016, CNGOF Grossesse 2022'
  },
  {
    id: 13, specialty: 'Médecine Interne', topic: 'Diabète', difficulty: 'easy',
    type: 'mcq', year: 2023,
    text: 'Un patient diabétique type 2 non insulinotraité a une HbA1c à 8,5% lors d\'un bilan de routine. Son traitement actuel est la Metformine 2g/j. Quelle est votre attitude ?',
    options: ['Augmenter la Metformine à 3g/j', 'Ajouter un sulfamide hypoglycémiant', 'Ajouter un inhibiteur du SGLT-2 ou un analogue du GLP-1', 'Débuter l\'insuline d\'emblée', 'Ne rien changer et recontrôler dans 6 mois'],
    correct: 2,
    explanation: 'En cas d\'objectif non atteint sous Metformine seule (HbA1c > 7% en général), on ajoute une 2ème classe en bithérapie. Les iSGLT-2 (Empagliflozine, Dapagliflozine) ou les analogues du GLP-1 sont préférés si présence de maladie cardiovasculaire ou rénale car ils ont des bénéfices CV et rénaux démontrés.',
    references: 'ESC/EASD Guidelines Diabète 2023, HAS Diabète type 2 2023'
  },
  {
    id: 14, specialty: 'Chirurgie', topic: 'Appendicite', difficulty: 'easy',
    type: 'mcq', year: 2024,
    text: 'Un adolescent de 16 ans consulte pour douleur de la fosse iliaque droite depuis 12 heures, avec nausées et fièvre à 38°C. Le score d\'Alvarado est à 8. La NFS montre des GB à 14 000. Quelle est la prise en charge ?',
    options: ['Antibiothérapie seule', 'Laparotomie exploratrice', 'Appendicectomie laparoscopique', 'Surveillance 48h', 'TDM abdominopelvien puis décision'],
    correct: 2,
    explanation: 'Avec un score d\'Alvarado ≥ 7 (haute probabilité d\'appendicite), l\'appendicectomie est indiquée. La cœlioscopie est la voie d\'abord de référence (moins de complications pariétales, récupération plus rapide). Un score entre 5 et 6 nécessite une imagerie complémentaire (echo ± TDM).',
    references: 'HAS Appendicite aiguë 2022'
  },
  {
    id: 15, specialty: 'Urgences', topic: 'Choc', difficulty: 'hard',
    type: 'mcq', year: 2023,
    text: 'Un patient post-opératoire présente : PA 80/50 mmHg, FC 130 bpm, PVC basse, débit cardiaque effondré, résistances vasculaires systémiques augmentées. Quel type de choc présentez-vous ?',
    options: ['Choc distributif (septique)', 'Choc cardiogénique', 'Choc hypovolémique', 'Choc obstructif', 'Choc anaphylactique'],
    correct: 2,
    explanation: 'Le choc hypovolémique est caractérisé par : PAD basse, FC élevée, PVC basse (précharge effondrée), débit cardiaque bas, et vasoconstriction réflexe (RVS augmentées). Causes : hémorragie, déshydratation. Traitement : remplissage vasculaire + traitement étiologique. Choc septique : RVS basses, vasodilatation.',
    references: 'SRLF Choc circulatoire 2020'
  },
];

// Make accessible globally
if (typeof window !== 'undefined') window.QUESTIONS_DB = QUESTIONS_DB;
