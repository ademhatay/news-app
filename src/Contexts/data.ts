
export type FeedData = {
    id: number;
    title: string;
    desc?: string;
    image: string;
    author: string;
    authorImage?: string;
    popular: boolean;
    date: string;
    lang: string;
    main?: boolean;
    feed?: string;
    last?: boolean;
    banner?: boolean;
  };

  export const searchData = (search: string, data: any[]) => {
    if (!search) {
      return data;
    }
  
    const searchTerm = search.toLowerCase();
    return data.filter(
      (item: { title: string; desc: string; }) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.desc?.toLowerCase().includes(searchTerm)
    );
  };

export const data: FeedData[] = [
    {
        "id": 1,
        "title": "Celebrate Kamala Harris, but don’t stop applying pressure to the system",
        "desc": "We shouldn’t downplay what vice president-elect Kamala Harris means as a minority woman in high office, but we can’t ignore her complicated past nor a system she inhabits that is built to thwart change.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92515_AP_20311323547700_1605632252104.jpg",
        "author": "Sharan Dhaliwal",
        "authorImage": "https://hizliresim.com/8i4n49f",
        "popular": false,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "en",
        "main": true,
        "feed": "When Joe Biden became president-elect of the United States, VP Kamala Harris hit the headlines, as the first Black and South Asian woman in that role. The pandemic and lockdown limited our personal interactions, so people were posting their excitement over Harris’ historic win on Instagram and Twitter. Not only do Black and South Asian people feel acknowledged, young women can now aspire to gain achievements in roles that they’ve historically been told aren’t for them.But we must think about how far representation really gets us, especially in politics. We can’t ignore the reality of American and indeed, global politics and how it comes into play with race relations. Kamala Harris was born in California to her Tamil biologist mother Shyamala Gopalan and Jamaican father Donald J. Harris, an economist. She went on to study law and worked as a deputy and assistant District Attorney in California, eventually running for District Attorney in San Francisco and becoming the first person of colour elected. In 2016, she won the Senate election, becoming the second African American woman and the first South Asian American to serve in the upper house. And as we all know, on August 11 2020, she was announced as Biden’s running mate for the presidential election. Her journey has proved hard - she went to Howard University, a historically African American institute, but was raised in a very white neighborhood. While at Howard, she served as president of its chapter of the Black Law Students Association, advocating for the rights of Black people. Like many people of colour and especially mixed race people, the need to identify with something lives strongly within them - being a part of two strong cultures, which sometimes contradict each other, can create a feeling of displacement for many. Looking through Harris’ history however, there are discrepancies in her solidarity to America’s minority communities, and Black and LGBTQ+ people in particular. A complicated record During her tenure as District Attorney in California, her record in the criminal justice system brought “tough on crime” policies, which singled out Black people, yielding a high rate of incarceration - and her aversion in bringing police officers to account over wrongdoings was greatly questioned. Harris’ history with policies relating to the LGBTQ+ community is also complicated - she declined to defend Proposition 8, the state’s ban on same-sex marriage but later officiated the first same sex marriage in California. In 2015, she argued in court that two prisoners should not receive gender confirmation surgery, later saying she was simply working for her client’s needs and had later worked to change the policy regarding trans inmates’ surgeries. In an interview with Pose actor Angelica Ross, they both discussed this matter. Later Ross stated: “In this conversation and several following this one, I called Kamala in to talk about her record on trans people and sex workers and non violent offenders. She acknowledged her role in collaborating with the state that destroyed many Black lives and shared the moment she realised how she could use her position to change the system while still protecting us from violent offenders, especially those most vulnerable to domestic and intimate partner violence.” We must remember that a woman of colour, and specifically one with Black heritage, will be brought to account far quicker than her white counterparts. While her past shows inconsistencies, so does that of every prosecutor. And while she now publicly supports rights for people of colour and LGBTQ+ people, she will have to do it while navigating the system. Because the real issue here is the system in which we are reliant on. Not only does it not allow Black people to exist within it, it refutes any equality as a standard threshold. There is no society we currently live in that allows a woman of colour to truly be representative of her culture and people. The system is built to reject it, so although she’s in office, she will have to fight against every hurdle that comes her way. A recent example can be seen in Lord Kilclooney’s (a Northern Irish member of the House of Lords) tweet, saying: “What happens if Biden moves on and the Indian becomes President? Who then becomes Vice President”. Harris being referred to as part of her ethnicity, and not for her achievements, is a natural reaction from many men in power And those in power, tend to be men. Not once has Biden been referred to as “the Irish, English and French” and yet so casually she was referred to as “the Indian” - notably rejecting her Black ancestry. It was then followed up with Kilclooney referring to Indians as “reliable” and that he has them as “tenants”, not as a whole race of people. He was later asked to apologise and retract his tweet, but the sentiment still stands."
    },
    {
        "id": 2,
        "title": "Ethiopia s needless war",
        "desc": "The war in Ethiopia can still be stopped before it gets out of control and potentially draws in Eritrea.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92491_20201117T114807Z_1600604085_RC2Z4K958BDO_RTRMADP_3_ETHIOPIACONFLICTUNAID_1605621822733.JPG",
        "author": "Abdi Ismail Samatar",
        "authorImage": "https://cdn-i.pr.trt.com.tr/trtworld/w32/h32/q80/0u_867.jpg",
        "popular": false,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "en",
        "main": true,
        "feed": "Ethiopia’s reputation as an African country not colonised by a European power is belied by the fact that ethnic chauvinists politically dominated its multicultural landscape for almost 200 years. Today’s needless war has its roots in that cursed history. \
        Mythical Ethiopia was the land of serfdom and the rulers’ brutality produced rebellions over the ages. A progressive student movement challenged the feudal monarchy in the late 1960s and early 1970s, but the military hijacked the resistance and installed a violent government precipitating open rebellions across the country. \
        \
        The combination of the victory of the Eritrean liberation movement in 1990 and the tenacity of the Tigray People’s Liberation Front (TPLF) led to the regime’s collapse and Eritrea’s independence. The TPLF took over Ethiopia and divided it into a centralised ethnic federation. Many Ethiopians momentarily celebrated the demise of the military.     "
    },
    {
        "id": 3,
        "title": "The Muslim surveillance-industrial complex",
        "desc": "The Muslim Pro and Muslim Mingle data harvesting revelations are consistent with the realities of American Muslim surveillance since 9/11.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92557_GettyImages1185884207_1605698219747.jpg",
        "author": "Waqas Mirza",
        "authorImage": "https://www.trtworld.com/profile.svg",
        "popular": false,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "en",
        "main": true,
        "feed": "The ostensible aim of state surveillance is to collect data — ”intelligence gathering” in the parlance of national security — but this objective is complemented by two additional and seemingly contradictory goals.For the architects of surveillance, those who are its targets must understand they are being watched, in order for the desired self-censorship and behaviour modification to take root. Only those who appreciate the possibility of being monitored would, after all, have any reason to avoid voicing dissenting opinions and engaging in political activism, wary of its consequences.On the other hand, they must also not know they are being watched, lest that begins to interfere with the very process of intelligence gathering.American Muslims have long been subject to surveillance and as a result, have become accustomed to these contradictory effects. Jokes abound in casual conversations about one’s personal FBI agent, tapped phones, and who may be a government informant, indicating an understanding that the community is constantly under watch.Yet, when these facts are disclosed, shock is often the first response. “It was a terrifying feeling,” one student told the ACLU after discovering that a charitable religious group he founded had been infiltrated. “I couldn't believe that an NYPD informant had been in my home.”This shock was on full display as a report from Vice revealed that the US military, through third-party intermediaries, had access to location data for millions of Muslims who used apps such as Muslim Pro and Muslim Mingle. Even as there was an understanding that American Muslim communities were under constant surveillance, the knowledge of it proved to be unsettling."
    },
    {
        "id": 4,
        "title": "Cricket — India s only effective weapon against Pakistan",
        "desc": "The only place India has been able to hurt Pakistan is cricket. But the end result is an entire generation missing out on the sport's most captivating spectacle: India vs Pakistan.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92186_20190616T174605Z_311996859_RC1FBA1126C0_RTRMADP_3_CRICKETWORLDCUPINDPAK_1605269378518.JPG",
        "author": "Ahsan Butt",
        "authorImage": "https://cdn-i.pr.trt.com.tr/trtworld/w32/h32/q80/0u_489.jpg",
        "popular": true,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "en",
        "feed": "This week, another edition of the Indian Premier League drew to a successful close. The global Covid-19 pandemic meant that there was much different about this year’s IPL: played behind closed doors, for instance, and that too not in India, but the UAE.However, one aspect of the IPL has maintained a humdrum continuity: the forced exclusion of Pakistanis. This “sad and strange exile,” as the Guardian calls it, has now lasted thirteen years.As an International Relations professor, especially one that studies nationalism, I can understand the ban on Pakistanis. As a cricket fan, I find it abhorrent.To understand India’s ban, we have to go back to 2008. At the time, Pakistani players did indeed feature in the IPL. But then Lashkar-e-Taiba, a terrorist group based in Pakistan, laid siege to a glamorous Mumbai hotel, one that took several days to neutralise and that claimed almost 200 lives.This attack, quite naturally, raised the spectre of retribution. Indeed, it would not be the first (nor last) time that India found itself in a position of trying to get revenge for a terrorist attack originating in Pakistan. Historically, New Delhi has sought to punish Pakistan for its support and tolerance of terrorist groups that attack Indian soil.However, many of the tools of punishment common in international politics are either not available or not useful for India when it comes to Pakistan.Diplomatically, India is hamstrung by the fact that Pakistan has always had one, and sometimes two, permanent members of the UN Security Council in its corner. China has been a steadfast friend of Islamabad’s for half a century, while the US has closely partnered when its national security goals call for it, most obviously during the 1980s and 2000s.As such, despite carrying more clout than Pakistan in global capitals, India has not been able to make this difference felt. And as long as China is on the UNSC and India isn’t, this state of affairs is likely to continue.Economically, a country of India’s size would usually punish one like Pakistan with sanctions. The problem is that – precisely because the Indo-Pak relationship has always been in the doldrums – direct sanctions would have no virtual effect on the Pakistani economy. It would be one thing were, say, Bangladesh the target of Indian sanctions: trade between the two stands at $10 billion a year, and India is Bangladesh’s largest trading partner. But even at the best of times, Indo-Pak trade is one-tenth that figure – and these are not the best of times.The prospect of wider, regional sanctions is similarly fanciful. Because South Asian economies are so badly connected to each other’s, multilateral sanctions are a non-credible threat. And that is before we even get to the lack of any institutionalised regional architecture – no, the decrepit SAARC does not count – where the prospect of such sanctions could be addressed in the first place.It is in the military realm where India’s efforts to punish Pakistan have been most clearly frustrated. Because Pakistan is a nuclear weapons state, there is only so much India can do, only so far it can climb the so-called “escalatory ladder,” before risking its own survival.To be sure, India has endeavoured, somewhat successfully, to increase its manoeuvrability underneath these red lines. It has gone from merely threatening military action (in crises in 2002 and 2008) to launching limited “surgical strikes” (in 2016) in Pakistan, to flying jets into, and bombing targets within, Pakistani territory (2019).But the strategic value of such brinksmanship is unclear at best: in 2019, for instance, Pakistani jets responded to Indian incursions by themselves launching airstrikes in Indian territory, and in the ensuing dogfight, captured an Indian pilot. If India’s objectives were to strike fear in the hearts of Pakistan’s collective leadership, those goals were plainly unmet."
    },
    {
        "id": 5,
        "title": "Pakistani dossier on Indian terror sponsorship has big implications",
        "desc": "The evidence presented by Pakistan should be examined seriously by the international community.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92372_AP_20319427878019_1605528891118.jpg",
        "author": "CJ Werleman",
        "authorImage": "https://cdn-i.pr.trt.com.tr/trtworld/w32/h32/q80/0u_454.jpg",
        "popular": true,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "en",
        "last": true,
        "feed": "Barely a day after Indian and Pakistani forces exchanged artillery shelling across the Line of Control in Kashmir, leaving 13 dead and dozens wounded, the government of Pakistan came forward with what it claims is “irrefutable evidence” of Indian government ties to terrorism on Pakistani soil.While Pakistan and India have routinely accused each other of sponsoring terrorism, Saturday marked the first time Pakistani government officials have done so armed with a mountain of evidence to back up their allegations - and thus it now falls upon the international community to take notice.For too long Pakistan has been exclusively and unfairly branded a sponsor of terrorism in the context of India-Pak relations, the labelling operating as an albatross around the South Asian nation's neck, one that has stymied the country’s economic-social-political development and helped India successfully sideline the Kashmir conflict from the international agenda.In the post-9/11 era, Muslim-majority Pakistan has become synonymous with terrorism for the mere fact Muslims and Islam have been made the referent objects in global security discourse, and thus why much of the international community has come to view India-Pak tensions and conflict through this prism. Hindu-majority India is identified as a Western-Judeo-Christian ally in the War on Terror and Pakistan an enemy state or one worthy of suspicion.In the “War on Terror” era, India has found a “favourable strategic environment for sabotage and subversion in Pakistan and this was taken to a new level of violence through state-sponsored terrorism by India,” observe Adeela Naureen and Umar Waqar for the Express Tribune.It’s for these reasons Indian state sponsorship is one of the least examined topics in global security discourse, but the “uncontrivable” evidence provided by the Pakistani government and military officials at a news conference suggests the Indian government’s absence from terrorism literature should be a thing no more.Pakistan’s Foreign Minister Shah Mehmood Qureshi and Pakistan Armed Forces spokesperson Major General Babar Iftikhar presented a trove of evidence, including banking transactions worth millions of dollars, documents, and audio clips and details of contacts between members of India’s intelligence agencies and Pakistani militants and terrorist groups, including Jamaat ul Ahrar, Baloch Liberation Army and the Tehrik-e-Taliban Pakistan.“We are now presenting irrefutable evidence to the world to demonstrate the Indian state’s direct sponsorship of terrorism in Pakistan that has resulted in the deaths of innocent Pakistanis. The international community can no longer turn a blind eye to this rogue behaviour,” Qureshi said.While these revelations are both shocking and damning, they should not be misconstrued as new or controversial, as United States government officials have long recognised Indian state-sponsored terrorism in Pakistan, with former US Secretary of Defense telling an audience at Oklahoma’s Cameron University in 2011 that “India for some time has always used Afghanistan as a second front, and India has over the years financed problems for Pakistan on that side of the border.”Even current and former members of the Indian Armed Forces have acknowledged India “uses terrorism to counter terrorism” in reference to Pakistan, including the late Indian Defence Minister Manohar Parrikar; Major (Retired) Gaurav Arya, who told a television audience he had participated in terrorist activities in Balochistan; and Naval Commander Kulbushan Jadhav, who was sentenced to death by a Pakistani military court after confessing to carrying out terrorism in Pakistan on March 3, 2016.In sponsoring terrorist groups and proxy militias that operate in Afghanistan and on Pakistan’s eastern border, India has aimed to mire the country in destabilising violence, weaken its resolve over Kashmir and undermine its economic partnership with China by target"
    },
    {
        "id": 6,
        "title": "This is how a Trump constitutional coup would unfold",
        "desc": "A coup in the United States sounds absurd. But who would have thought the US would be in a position where the sitting president is refusing to concede defeat?",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92305_AP_20320043645456_1605431735852.jpg",
        "author": "Alfons Lopez Tena",
        "authorImage": "https://cdn-i.pr.trt.com.tr/trtworld/w32/h32/q80/0u_794.jpg",
        "popular": true,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "en",
        "banner": true,
        "feed": "The stubborn refusal by both Trump and his party’s bigwigs to acknowledge that Biden has won not only the popular vote, by far, and the majority of delegates to the Electoral College, becoming the President-elect, has been addressed by the commentariat with several mutually compatible hypotheses: psychological flaws, a scam to get even more money from his supporters, a grab to keep his grip on the Republican party, a narrative of stab-in-the-back to inflame his frenzied followers, etc.But there is an even bleaker explanation: Trump is staging a coup to be appointed president within the Electoral College by exploiting constitutional cracks as a deft Schmitt-like William Barr can accomplish.The best predictor of aspiring autocrats’ behaviour, Masha Gessen writes, “are their own public statements, because these statements brought them to power in the first place.”Trump has repeatedly stated all the points that this article enumerates both before and after the election. Some of his minions have parroted him, such as Lindsey Graham and Ron DeSantis, who have publicly declared their approval for Republican-controlled state legislatures to appoint electors to vote for Trump and to cast aside those voted by the people. They have even urged Trump followers to push those legislatures to override the pro-Biden election results. Mike Pompeo, on the other hand, has announced a second Trump administration.No need of coup if the results of only one state, by tiny margins, can determine the outcome, as it happened in 2000 — a pliable Supreme Court would have bestowed the presidency upon Trump. But now, despite voter suppression, mail-in ballots boycotted by his administration, and umpteen obstacles to vote in the districts where the Republican party is feeble, Biden’s victory is too widespread and too big, to repeat the 2000 playbook.Now only a full-fledged coup that formally respects the Constitution will do. Theoretically, such a coup, no matter how likely or unlikely, would unfold as follows:Dozens of lawsuits are filed to suppress votes in multiple states. Their aim is not to win but rather a Steve Bannon-esque “flood the zone with sh*t,” providing a rationale for Republican state legislatures to act. Each state has its own deadlines for certifying election results that are then used to allocate its Electoral College votes, and by federal law as long as certification results are finalised by 8 December, the result is conclusive. By dragging out the process, Trump is seeking to create more wiggle room to second-guess the results."
    },
    {
        "id": 7,
        "title": "A Biden administration will contend with a vastly changed South Asia",
        "desc": "The US will need to focus on bilateral relationships in the Indian Subcontinent rather than relying on India as its guide.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92211_AP_20316588309029_1605276857571.jpg",
        "author": "Arif Rafiq",
        "authorImage": "https://cdn-i.pr.trt.com.tr/trtworld/w32/h32/q80/0u_672.jpg",
        "popular": true,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "tr",
        "last": true,
        "feed": "Obama-Biden yönetimi son yıllarında Yeni Delhi'ye yönelik büyük beklentilerini açıkça ortaya koydu. 2014 yılında Başkan Barack Obama, Hindistan'ı tüm dünyaya barış ve güvenliğin sağlanmasına yardımcı olabilecek büyük bir güç olarak tanımladı. Obama-Biden yönetimi, 2015 Ulusal Güvenlik Stratejisinde Hindistan'ı “bölgesel bir güvenlik sağlayıcısı” olarak tasavvur etmişti. ve iddialı Çin ve hem göreceli hem de laik açıdan geride kalan bir Hindistan. Biden'ın ulusal güvenlik ekibi, Washington'un bölgeye yönelik Hindistan merkezli yaklaşımını sürdürürse yanılmış olur. Biden görevden ayrıldığında Hindistan ekonomisi yüzde 8 oranında büyüyordu. Ancak Başbakan Narendra Modi'nin başarısız şeytan çıkarma programı da dahil olmak üzere bir dizi yıkıcı ekonomik önleminin ardından büyüme düşüş eğilimine girdi. Ve ardından koronavirüs geldi. Mart ayında sadece birkaç saat önceden duyurulan ülke çapındaki tecrit, göçmenlerin yüzlerce kilometre yürüyerek evlerine geri dönmesine neden oldu ve ekonomi çöktü; bu yılın Nisan-Haziran çeyreğinde yüzde 23,9 oranında küçüldü. Hindistan şu anda en büyük ikinci toplam koronavirüs vakasına ve büyük ekonomiler arasında en şiddetli daralmaya ev sahipliği yapmak gibi alçakça bir ayrıcalığa sahip. Hindistan ekonomisinin, Mart ayında sona eren bu mali yılda yaklaşık yüzde 10 oranında küçülmesi bekleniyor. İktisatçıların yaptığı bir anket."
    },
    {
        "id": 8,
        "title": "Afganistan'daki bir anlaşma dünya çapındaki militan grupları nasıl etkileyebilir?",
        "desc": "Taliban'ın Afganistan'da elde edeceği herhangi bir çözüm, her yerdeki 'cihatçı' gruplar üzerinde dalga etkisi yaratacak.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_84806_AFG20171130FORCESREUTERS_1605185243023.JPG",
        "author": "Abdul Basit",
        "authorImage": "https://cdn-i.pr.trt.com.tr/trtworld/w32/h32/q80/0u_1075.jpg",
        "popular": true,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "tr",
        "feed": "Devam eden Afganistan içi görüşmeler ve ABD-Taliban anlaşması, yalnızca Afganistan'ın gelecekteki siyasi düzeni için değil, aynı zamanda daha geniş 'cihatçı' hareket için de önemli sonuçlar doğuracaktır. Bu bağlamda, çeşitli grupların ve etkili ideologların bu gelişmelere tepkileri şu şekildedir: oldukça öğretici. Bu tepkiler, kutlamalar ve kınamalardan temkinli iyimserliğe kadar çeşitlilik gösteriyor ve daha büyük hareketin parçalanmış doğasını açığa çıkarıyor; eğer bu grupları, Afganistan'daki hedeflerine ulaşmak için (aşırı) dini güdümlü siyaseti militanlıkla birleştiren daha büyük bir hareketin parçası olarak nitelendirebilirsek. .Afganlar arası müzakerelerin (şu anda çıkmaza girmiş durumda) sonucu ve Taliban'ın verdiği veya reddettiği siyasi uzlaşmalar, onların 'cihatçı' bir grup olarak güvenilirliğini etkileyecektir. Sonuç olarak, Sünni militan hareketi için Taliban ya değer verilecek bir model haline gelecektir. aşağıdaki veya taklit edilmemesi gereken bir örnek. Bu da Taliban'ı potansiyel olarak 22'yi yakalama durumunda bırakıyor. Taliban şeriat hukuku taleplerini yumuşatırsa, daha geniş katı kesimler arasında itibarsızlaşacak ve muhtemelen ayrılmalarla sonuçlanacak. Daha aşırı Taliban grupları, Horasan Eyaleti İslam Devleti (IŞİD) gibi diğer gruplara katılabilir. Tam tersine, eğer Taliban esnek kalmazsa siyasi hedeflerine, yani Afganistan'da iktidara geri dönmeye ulaşamayabilir. Afganistan içi müzakerelerin sonucu da çok önemlidir, çünkü birkaçı dışında cihatçılarla başarılı müzakerelerin büyük bir önceliği yoktur. , var. Muhtemelen, dini iddialardan taviz vermek kolay olmadığı için siyasi çözüme ulaşmak ve konuşmak zordur; din siyasi pazarlığın ötesinde bir konudur."
    },
    {
        "id": 9,
        "title": "Hafız Esad 50 yıl önce Baas Partisi'ni ve devleti nasıl ele geçirdi?",
        "desc": "Hafız Esad'ın 13 Kasım 1970'te uğursuz bir şekilde iktidarı ele geçirmesi, Alevilerin kalbinden eski bir öğrenci aktivist ve solcu Baasçı tarafından anlatılıyor.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92567_AP_6701010230_1605705460626.jpg",
        "author": "Faysal Mohamad",
        "authorImage": "https://cdn-i.pr.trt.com.tr/trtworld/w32/h32/q80/0u_1071.jpg",
        "popular": false,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "tr",
        "last": true,
        "feed": "30 Ekim 1970'te Suriye Baas Partisi Onuncu Olağanüstü Ulusal Kurultayı'nı başkent Şam'da gerçekleştirdi. Duruşmalar, partinin güçlü adamı General Salah Cedid'in liderliğindeki radikal sol kanadının talimatıyla kapalı kapılar ardında gerçekleştirildi. Gündemin ana maddesi dönemin Savunma Bakanı Hafız Esad ve onun genelkurmay başkanı General Mustafa Tlas'ın görevden alınmasıydı. Doğrudan olaya dahil olanlar dışında, o zamanlar çok az kişi bu parti içi kavganın sonuçlarının farkındaydı. 13 Kasım'da Esad, partinin önde gelen üyelerini tutuklayarak örgütü kendisini eleştirenlerden temizleyen bir darbe başlattı. Ayın 16'sında devlet medyası, Esad'ın partiyi ele geçirmesinin ve devleti ele geçirmesinin resmi başlangıcına işaret eden bir 'Düzeltme Hareketi'nin gerçekleştiğini duyurdu. Duyuru, 17 yaşındaki omurgamı ürpertti. O zamanlar ben bir öğrenci aktivistiydim ve partiye hakim olan grubun destekçisiydim. Ayrıca Esad'ın sinsi otoriterliğine karşı ilkeli direnişi onun 1968'de hapse atılmasına yol açan bir subayın da kardeşiydim. Bu nedenle, tarihteki bu anın uğursuzluğunu içgüdüsel olarak anladım. Alevilerin çoğunlukta olduğu Lazkiye'de yer alan memleketim Jableh'de yoldaşlarım ve ben, Esad'ın darbesine karşı koymak için hemen benzer düşüncelere sahip kişilerle protestolar planlamaya başladık. Aynı gece, Esad yanlısı silahlı çeteler açıkça onları takip etmek için sokaklarda dolaştı. Suriye kıyılarındaki solcu Baasçılar. Yakalandıktan sonra, bu kişiler ciddi şekilde dövüldü ve darbe karşıtı gösterilere katılmamaları konusunda uyarıldı. Daha sonra 1982 Hama Katliamına öncülük edecek olan kötü şöhretli Savunma Şirketlerinin komutanı Hafız'ın küçük kardeşi Rıfat tarafından seferber edilen ve konuşlandırılan şiddet, Suriye toplumunu terörize etmeye gelen şebbihalarla ilk deneyimimizi oluşturdu. Neredeyse tamamı 'Alevi' idi.."
    },
    {
        "id": 10,
        "title": "Who was the real target of Pakistan s dossier on Indian terror sponsorship?",
        "desc": "Last week, decision-makers decided it was time to raise the stakes in the India-Pakistan rivalry.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92372_AP_20319427878019_1605704387269.jpg",
        "author": "tom hussaın",
        "authorImage": "https://cdn-i.pr.trt.com.tr/trtworld/w32/h32/q80/0u_559.jpg",
        "popular": false,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "en",
        "last": true,
        "feed": "Nothing grabs an audience like a spy thriller. From James Bond to Jason Bourne, fictional covert operatives have become cultural icons. Every day, millions of people around the world fantasise about becoming an unstoppable force for “good”.The reality of espionage is far less glamorous and certainly not laudable for its morality.Cinematically put, it is about one state finding the pressure points of a rival state - and squeezing.Covert operations are intertwined with propaganda - typically the proverbial menu of lies sandwiched between two half-truths. The public is conditioned to take sides, according to the colour of their passport. One person’s freedom fighter is another’s terrorist - unless one wants to be labelled as a cynic or, worse, a traitor and/or apostate.As Hollywood has told us, it is the job of decision-makers to ensure that these covert wars do not become actual wars.In this regard, recent episodes of the 73-year-old covert war between India and Pakistan have been particularly instructive.Like their counterparts around the world, policymakers in Islamabad and New Delhi have been working on strategies to favourably attract the attention of US President-elect Joe Biden.Leaders in both capitals, as ever, also had domestic political motivations for wanting to make a bold political statement at this particular juncture.Narendra Modi and his Hindutva mob needed to look strong after China caught India napping in Ladakh.Similarly, Imran Khan and his military supporters needed a distraction from Pakistan’s stagflationary economy and the opposition movement it is fuelling.Last week, decision-makers in one of those capital cities decided it was time to raise the stakes, for whatever reason.They gave the order to provoke the most intense artillery duel seen along the Line of Control in disputed Kashmir in many years. Homes and schools were targeted, again. Proportionally, there were more civilian casualties than military ones on both sides. No tactical advantage was gained.In the absence of any claimable victory, there was no heroic or glorious story to tell - just human suffering and a renewal of the pre-existing hatreds, against the backdrop of the relentless Covid-19 pandemic.The propaganda exchanges of this episode of Spy Vs. Spy came on Saturday.Pakistan rolled out a dossier of “irrefutable evidence” purporting that India is deeply involved in covert operations across the country, mostly executed through existing insurgent movements based in Afghanistan and elsewhere.The X-Factor of the show was provided by purported audio recordings of Indian intelligence operatives handling their human assets as they carried out attacks in Pakistan.Naturally, this was framed as proof of Indian sponsorship of cross-border terrorism, echoing India’s longstanding accusations against it.The scale and ambition of the described Indian plan to destabilise Pakistan are what made the Islamabad-produced segment of the episode so viewable.Evidence was presented linking various tactical terrorist campaigns aimed at reviving the greatly diminished insurgencies in the restive Balochistan province and the tribal districts of Khyber Pakhtunkhwa province.Firing for effect, Pakistan's government presented a timelined list of specific attacks and campaigns on its soil and linked them to Indian intelligence officers operating under diplomatic cover from consulates in Afghanistan.Likewise, Islamabad also provided proof that New Delhi is operating camps in areas of northern India bordering Pakistan."
    },
    {
        "id": 11,
        "title": "US President-elect Biden s priority is not Turkey",
        "desc": "Joe Biden will first have to deal with controlling a spiralling pandemic and recovering the economy.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_90927_AP_19138732015030_1605536766138.jpg",
        "author": "Ali Çınar",
        "authorImage": "https://www.trtworld.com/profile.svg",
        "popular": false,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "en",
        "last": true,
        "feed": "For nearly five months, both the US and the World have been discussing the US presidential election. All eyes have been focused on President Trump as everyone is waiting to see whether he will accept defeat and help President-elect Joe Biden's transition team.While Biden has increased his popular vote share to 78 million and the number of delegates to 306, we can see that Trump's legal war does not seem realistic, especially after Biden won Georgia and Pennsylvania, which are critical states.In addition, the Cybersecurity and Infrastructure Security Agency (CISA), operating under the US Department of Homeland Security, made an official statement describing the elections held on November 3 as the most reliable elections in US history.The majority of people in Turkey believe Turkey-US relations will be no better with Biden in office. However, all of the issues stemming from Trump's term still exist and have not been resolved yet.When President-elect Biden takes office on January 20, we should not expect him to move against Turkey right away. President-elect Biden and his foreign policy team will not break ties with Ankara due to Turkey’s NATO membership and its strategic position. Both NATO allies might seek better communication avenues to solve their issues through diplomacy.Among Biden's priorities, number one is the fight against Covid-19. With the number of daily deaths reaching 1,100 and daily case numbers reaching 130,000, the US is well into the second wave.In fact, several cities have reinstated the Stay-At-Home rule. Biden has already started working by establishing a scientific committee consisting of 13 members. Naturally, even though Trump is not happy, he has added good news about the vaccine as a plus for his administration.The second issue related to Covid-19 will be recovering the economy. Even though the rate of unemployment has gone down by 6.9 percent, there is a sense of confidence that this rate will rise again. Biden is expected to ask Congress to start working on a new stimulus package urgently.The area of priority is polarisation and race relations. The US under a Trump administration has been a deeply polarised place exacerbated further by Donald Trump's divisive statements and the killing of George Floyd. Biden, on the other hand, has signalled that he wants to unify the country.Biden will most certainly undo Trump's policies on a lot of these issues, especially with regards to healthcare, immigration, and education. However, a Republican majority in the Senate will cripple Biden.The bottom line is that Biden has a lot on his plate and Turkey is not high on that list of priorities.What about foreign policy?Biden will face extraordinary foreign policy challenges from Russia and China to North Korea and Iran, but he has said indicated he will try to rebuild alliances and restore trust as a priority.Through a globalist's perspective, he will be working closely with NATO, the European Union, and other international organisations. The statement by Michael Carpenter, an advisor to Biden, that the US will put pressure on Turkey, not only unilaterally but also by calling on its allies to do the same, is an indication of the kind of policy they will implement.Of course, while it is expected that there will be a return to the policies of the Obama era with regard to the Middle East and a softening of the stance towards Iran, there are also signals that the withdrawal of troops from Afghanistan will continue and that there may be problems with Saudi Arabia, who are being blamed for the war in Yemen and are responsible for the murder of Jamal Khashoggi.Apart from that, Biden also wants a two-state solution to the tensions between Israel and Palestine, even if it might make an enemy out of Netanyahu.Many names from the Biden team are familiar with Turkey. In particular, Anthony Blinken, the head of the Biden campaign's foreign policy initiatives, is one of those most familiar with Turkey. Other names mentioned for Department of State are William Burns, Susan Rice, Chris Coons, Chris Murphy.We might see a Female Secretary of Defense in the Biden-Harris Administration, and some names floating around are Tammy Duckworth and Michele Flournoy. Many people who are experts on Turkey from the think tank world close to the Democratic Party, such as the Atlantic Council and the Center for American Progress, will also likely take up positions within the White House.Ron Klain, officially announced by Biden as the White House Chief of Staff, also knows Turkey well. Indeed, he is one of the important names who worked in the White House during the vice-presidential terms of both Biden and Al Gore.What is clear here is that the clashes and conflicts with Turkey would have been unavoidable even if Trump had won, and it seems that it will continue with Biden, as well. Several of the current issues such as the US alliance with the YPG/PKK terror group, the S400 deal with Russia, and the conflict of interest in the eastern Mediterranean will be carried over into Biden's term.What is significant here is how the trust will be restored and through what compromises. It requires hard work to revert back to open communication channels and, most importantly, change how Turkey is perceived in the US Congress.Confidence-building measures should be built between the two allies to open a fresh page starting in January next 2021."
    },
    {
        "id": 11,
        "title": "ABD Başkanı seçilen Biden'ın önceliği Türkiye değil",
        "desc": "Joe Biden öncelikle sarmallaşan bir salgını kontrol etmek ve ekonomiyi toparlamakla uğraşmak zorunda kalacak.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_90927_AP_19138732015030_1605536766138.jpg",
        "author": "Ali Çınar",
        "authorImage": "https://www.trtworld.com/profile.svg",
        "popular": false,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "tr",
        "last": true,
        "feed": "Yaklaşık beş aydır hem ABD hem de dünya ABD başkanlık seçimini tartışıyor. Herkes onun yenilgiyi kabul edip etmeyeceğini ve Başkan seçilen Joe Biden'ın geçiş ekibine yardım edip etmeyeceğini görmeyi beklerken tüm gözler Başkan Trump'a çevrilmiş durumda. Biden popüler oy payını 78 milyona ve delege sayısını 306'ya çıkarırken, biz de özellikle Biden'ın kritik eyaletler olan Georgia ve Pensilvanya'yı kazanmasının ardından Trump'ın hukuk savaşının gerçekçi görünmediğini görüyoruz. Ayrıca ABD İç Güvenlik Bakanlığı'na bağlı olarak faaliyet gösteren Siber Güvenlik ve Altyapı Güvenliği Ajansı (CISA), durumu açıklayan resmi bir açıklama yaptı. 3 Kasım'da yapılan seçimler ABD tarihinin en güvenilir seçimleri olarak değerlendiriliyor. Türkiye'de halkın çoğunluğu Biden'ın görevde olmasıyla Türkiye-ABD ilişkilerinin daha iyi olmayacağına inanıyor. Ancak Trump'ın döneminden kaynaklanan tüm sorunlar hala mevcut ve henüz çözülmüş değil. Başkan seçilen Biden 20 Ocak'ta göreve geldiğinde hemen Türkiye'ye karşı harekete geçmesini beklememeliyiz. Cumhurbaşkanı seçilen Biden ve dış politika ekibi, Türkiye'nin NATO üyeliği ve stratejik konumu nedeniyle Ankara ile bağlarını koparmayacak. Her iki NATO müttefiki de sorunlarını diplomasi yoluyla çözmek için daha iyi iletişim yolları arayabilir. Biden'ın öncelikleri arasında Kovid-19'la mücadele birinci sırada yer alıyor. Günlük ölüm sayısının 1.100'e, günlük vaka sayısının ise 130.000'e ulaşmasıyla ABD ikinci dalganın eşiğinde. Hatta birçok şehir Evde Kal kuralını yeniden uygulamaya koydu. Biden şimdiden 13 üyeden oluşan bir bilim komitesi kurarak çalışmalara başladı. Doğal olarak Trump her ne kadar mutlu olmasa da yönetimine artı olarak aşıyla ilgili güzel haberi de ekledi. Kovid-19 ile ilgili ikinci konu ise ekonominin toparlanması olacak."
    },
    {
        "id": 10,
        "title": "Pakistan'ın Hindistan'ın terör sponsorluğuna ilişkin dosyasının gerçek hedefi kimdi?",
        "desc": "Geçen hafta karar vericiler Hindistan-Pakistan rekabetinde çıtayı yükseltme zamanının geldiğine karar verdiler.",
        "image": "https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92372_AP_20319427878019_1605704387269.jpg",
        "author": "tom hussaın",
        "authorImage": "https://cdn-i.pr.trt.com.tr/trtworld/w32/h32/q80/0u_559.jpg",
        "popular": false,
        "date": "13-12-2022T09:30:00.000Z",
        "lang": "tr",
        "last": true,
        "feed": "Hiçbir şey izleyiciyi bir casus gerilim filmi kadar yakalayamaz. James Bond'dan Jason Bourne'a kadar kurgusal gizli ajanlar kültürel simgeler haline geldi. Her gün dünya çapında milyonlarca insan iyilik için durdurulamaz bir güç olma fantezisi kuruyor. Casusluğun gerçekliği çok daha az çekici ve ahlaki açıdan kesinlikle övülecek bir şey değil. Sinematik açıdan bakıldığında, bir devletin baskı noktalarını bulması ile ilgili. rakip devlet ve sıkıştırma. Gizli operasyonlar propagandayla iç içedir; tipik olarak iki yarı gerçek arasına sıkıştırılmış meşhur yalan menüsü. Halk pasaportunun rengine göre taraf olmaya şartlandırılıyor. Bir kişinin özgürlük savaşçısı, diğerinin teröristidir; tabii eğer biri alaycı ya da daha kötüsü hain ve/veya mürted olarak etiketlenmek istemiyorsa. Hollywood'un bize söylediği gibi, bu gizli savaşların devam etmesini sağlamak karar vericilerin görevidir. Bu bağlamda, Hindistan ile Pakistan arasında 73 yıldır devam eden gizli savaşın son dönemleri özellikle öğretici oldu. Dünya çapındaki emsalleri gibi, İslamabad ve Yeni Delhi'deki politika yapıcılar da Pakistan'ı olumlu yönde etkilemek için stratejiler üzerinde çalışıyor. ABD'nin seçilmiş başkanı Joe Biden'ın ilgisi her zaman olduğu gibi, her iki başkentteki liderlerin de bu özel noktada cesur bir siyasi açıklama yapmak isteme konusunda iç siyasi motivasyonları vardı. Narendra Modi ve onun Hindutva çetesi, Çin'in Hindistan'ı uyuklarken yakalamasının ardından güçlü görünmeye ihtiyaç duyuyordu. Benzer şekilde, İmran Han ve askeri destekçileri de Pakistan'ın stagflasyon halindeki ekonomisinden ve bunun körüklediği muhalefet hareketinden uzaklaşmaya ihtiyaç duyuyordu.Geçen hafta"
    },
    {
            "id": 12,
            "title": "Kamala Harris ı Kutlayalım, Ancak Sisteme Baskı Uygulamayı Sürdürelim",
            "desc": "Başkan yardımcısı seçilen Kamala Harris in yüksek makamdaki azınlık kadın olarak ne anlama geldiğini küçümsememeliyiz, ancak onun karmaşık geçmişini veya değişimi engellemeye yönelik kurulan bir sistemi göz ardı edemeyiz.",
            "image": "https://images.unsplash.com/photo-1584359983106-ef9366f27454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1864&q=80",
            "author": "Sharan Dhaliwal",
            "authorImage": "https://hizliresim.com/8i4n49f",
            "popular": false,
            "date": "13-12-2022T09:30:00.000Z",
            "lang": "tr",
            "main": true
        },
        {
            "id": 13,
            "title": "Ethiopia nın Gereksiz Savaşı",
            "desc": "Etiyopya daki savaş, kontrol dışına çıkmadan ve potansiyel olarak Eritre yi de içine çekmeden önce hala durdurulabilir.",
            "image": "https://images.unsplash.com/photo-1584359983106-ef9366f27454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1864&q=80",
            "author": "Abdi Ismail Samatar",
            "authorImage": "https://hizliresim.com/8pkctvv",
            "popular": false,
            "date": "13-12-2022T09:30:00.000Z",
            "lang": "tr",
            "main": true
        },
        {
            "id": 14,
            "title": "Müslüman Gözetim-Endüstriyel Kompleksi",
            "desc": "Müslüman Pro ve Müslüman Mingle veri toplama ortaya çıkarmaları, 9/11 den bu yana Amerikan Müslümanlarının gözetim gerçekleriyle uyumludur.",
            "image": "https://images.unsplash.com/photo-1584359983106-ef9366f27454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1864&q=80",
            "author": "Waqas Mirza",
            "popular": false,
            "date": "13-12-2022T09:30:00.000Z",
            "lang": "tr",
            "main": true
        },
        {
            "id": 15,
            "title": "Kriket - Hindistan ın Pakistan a Karşı Tek Etkili Silahı",
            "image": '',
            "author": "Ahsan Butt",
            "popular": true,
            "date": "13-12-2022T09:30:00.000Z",
            "lang": "tr"
        },
        {
            "id": 16,
            "title": "Pakistan ın Hindistan a Terör Sponsorluğu Dosyasının Gerçek Hedefi Kimdi?",
            "desc": "Geçen hafta, karar vericiler Hindistan-Pakistan rekabetinde bahisleri artırmanın zamanının geldiğine karar verdiler.",
           "image": "https://images.unsplash.com/photo-1584359983106-ef9366f27454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1864&q=80",
            "author": "tom hussaın",
            "authorImage": "https://hizliresim.com/matjgb4",
            "popular": true,
            "date": "13-12-2022T09:30:00.000Z",
            "lang": "tr",
            "feed": ""
        },
    
]
