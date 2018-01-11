let listOfWord = [
	["Abandon","Ability","Able","About","Above","Abroad","Absence","Absolute","Abstract","Abuse","Accurate","Ache","Active","Actor","Actual","Adapt","Add","Admire","Adjourn","Afford","Against","Agent","Agriculture","Allergy","Alone","Amongst","Any","Apology","Apple","Appeal","Argue","Argument","Arm","Arrow","Arrest","Artistic"],
	["Baby","Bachelor","Bag","Bandage","Bankrupt","Bark","Basis","Bath","Battle","Beard","Beauty","Behalf","Below","Beneath","Bet","Big","Bind","Biodiversity","Black","Blond","Blood","Breakfast","Bribe","Butcher"],
	["Cage","Calm","Captain","Career","Cattle","Caution","Challenge","Chaos","Character","Chat","Cheap","Cheerful","Chemical","Chicken","Chocolate","Childhood","Christmas","Circumstance","Classic","Clause","Click","Coach","Combination","Comfortable","Completion"],
	["Daily","Dare","Dangerous","Daughter","Dawn","Deal","Death","Decade","Decay","Declare","Defiance","Delicate","Depression","Depth","Deserve","Desire","Desperate","Determined","Device","Diet","Dimension","Dinner","Discovery","Discussion","Disposable","Dispute"],
	["Each","Earlobe","Easy","Eat","Ecology","Economic","Edition","Education","Effect","Effort","Egg","Empty","Engage","Enjoy","Enormous","Entry","Essential","Estimate","Evident","Evil"],
	["Face","Factor","Faculty","Fail","Failure","Fake","Famous","Farmer","Federal","Fellow","Female","Financial","First","Flesh","Flexible","Flood","Forecast","Fraternity","Frustration","Furniture"],
	["Gain","Gallon","Game","Garage","Garbage","Garden","Gate","Geothermal","Giant","Glass","Goalpost","Government","Graceful","Grammar","Great","Greedy","Gregarious","Guide","Gullible"],
	["Habitat","Half","Handle","Handsome","Hardware","Harvest","Hatred","Hazy","Heart","Heaven","Heavy","Height","Headache","Helpful","Herbicide","Hint","Historical","Hobby","Hollow","Honor","Hope","Hospital","Housework","Humidity","Hurricane"],
	["Ideal","Identity","Ignore","Illustrate","Imaginary","Immediate","Immigrant","Immoral","Impatience","Impress","Impulsive","Inch","Infant","Injury","Ink","Instant","Intelligent","Interrupt","Interval","Introduction"],
	["Jaw","Jelly","Jet","Jewel","Joke","Judge","Jealousy","Join","Journey","Jump","Junior","Jurisdiction","Juror","Jury","Just","Justice"],
	["Keen","Keep","Kick","Key","Kill","Kindness","Kiss","Knowledge","Knuckle","Kingdom","Kiss","Kitchen","Kneel","Knock"],
	["Laboratory","Ladder","Lady","Lake","Lamp","Land","Landfill","Landing","Late","Launch","Lawyer","Layer","Lavatory","Lawyer","Lazy","Leader","League","Lecture","Length","Level","License","Limit","Link"],
	["Machine","Mad","Magazine","Magic","Mail","Maintain","Major","Male","Manage","Many","Made","Marriage","Master","Matriculate","Maximum","Measure","Mediation","Medicine","Meteor","Methane","Midnight","Military"],
	["Nail","Naked","Name","Native","Nature","Nausea","Navy","Negative","Neglegance","Neighbor","Next","Nervous","Night","Nobody","Noisy","Normal","Nostril","Notes","Nuclear","Nurse"],
	["Oath","Obey","Object","Observe","Occupation","Offend","Obsessive","Once","Operate","Opportunity","Optimism","Order","Organize","Outcome","Outdoor","Overcast"],
	["Package","Painful","Pale","Palm","Panic","Parade","Park","Participate","Pass","Patience","Pattern","Peak","People","Performer","Permission","Persuade","Personality","Pharmacist","Phase","Picture","Pilot","Planet","Play"],
	["Qualification","Qualify","Quantity","Quarter","Queen","Question","Quick","Quit","Quite","Quiz","Quotation"],
	["Race","Radio","Rage","Rain","Rank","Rapid","Rational","Reach","Reader","Reality","Recession","Recognition","Record","Recycle","Reduce","Region","Relationship","Relief","Rely","Remarkable","Repeat","Restore","Ruthless"],
	["Sacrifice","Sail","Salad","Salary","Sarcastic","Satisfaction","Sauce","Savings","Scale","Scalp","Scene","Science","Scope","Score","Scratch","Sea","Second","Secret","Selfish","Senior","Sensible","Shadow","Shelter","Shoot","Show","Silver","Since","Similar","Single","Slap","Sleep","Sleeve","Slope"],
	["Tactful","Take","Talk","Tank","Tape","Taste","Tax","Technique","Temporary","Tendency","Tendon","Temple","Testify","Tennis","Texture","Themometer","Thigh","Thin","Thread","Throat","Thunderstorm","Tight","Tip","Tomorrow","Topic","Tough","Tour","Towel","Toxic","Traffic","Training","Transform","Transport","Tribe","Turbulence"],
	["Ugly","Umbrella","Umpire","Unable","Uncle","Underground","Underneath","Understand","Undertake","Undo","Unfortunately","Union","Unit","Uniform","Unlike","University","Unknown","Until","Up","Upon","Use"],
	["Valley","Valuable","Variation","Vary","Vast","Vegetable","Vehicle","Verb","Victim","Victory","Video","View","Village","Violence","Virtually","Vision","Voice","Volume","Vote"],
	["Wage","Waist","Waiter","Waitress","Wake","Walk","Wall","Wallet","Wander","Want","War","Warm","Warning","Wash","Water","Wave","Weak","Wealth","Weapon","Weave","Web","Week","Welcome","Well","What","When","Where","Whole","Why","Wide","Wife","Window","Will","Wish","Witness","Worry","Worse","Would","Wound","Wrist","Writing"],
	["Xylophone","Xenon","Xiphoid","Xenophobe","Xylem"],
	["Yard","Yawn","Yearly","Yell","Yellow","Yes","Yesterday","Yet","You","Young","Your","Yourself","Youth"],
	["Zero","Zone","Zoo","Zebra","Zinc","Zap","Zodiac","Zealot"]
];

// for every word's status or drop
let special = {
	NORMAL: 0,
	FIRE: 1,
	FREEZE: 2,
	SLOW: 3
};

function generateDrop(){
	// NORMAL: 85
	// FIRE: 5
	// FREEZE: 5
	// SLOW: 5

	// val range: 1 up to 100
	var val = randomize(1, 101);

	if(val <= 5)
		return special.FIRE;
	else if(val <= 10)
		return special.FREEZE;
	else if(val <= 15)
		return special.SLOW;
	else
		return special.NORMAL;
}
