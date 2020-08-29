import React, { Component } from 'react';
import './traitsDescription.css';

class TraitsDescription extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>


			  <div className="row">
			    <h3 className="headH">Openness</h3><b className="headB">(inventive/curious vs. consistent/cautious)</b>
			    <p style={{ paddingLeft: '15px', fontWeight: '500', fontFamily: 'sans-serif' }}>
			     Openness is a general appreciation for art, emotion, adventure, 
			     unusual ideas, imagination, curiosity, and variety of experience. 
			     People who are open to experience are intellectually curious,
			     open to emotion, sensitive to beauty and willing to try new things.
			     They tend to be, when compared to closed people, more creative and 
			     more aware of their feelings. They are also more likely to hold 
			     unconventional beliefs.
			    </p>

			    <div className="col-md-6 d-flex align-items-stretch">
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>High Openness</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Creative</li>
			             <li style={{listStyleType: 'square'}}>Open to trying new things</li>
			             <li style={{listStyleType: 'square'}}>Focused on tackling new challenges</li>
			             <li style={{listStyleType: 'square'}}>Glad to think about abstract concepts</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			    <div className='col-md-6 d-flex align-items-stretch'>
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>Low Openness</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Dislikes change</li>
			             <li style={{listStyleType: 'square'}}>Dislikes enjoy new things</li>
			             <li style={{listStyleType: 'square'}}>Not very imaginative</li>
			             <li style={{listStyleType: 'square'}}>Dislikes abstract or theoretical concepts</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			  </div>


			  <div className="row">
			    <h3 className="headH">Conscientiousness</h3><b className="headB">(efficient/organized vs. extravagant/careless)</b>
			    <p style={{ paddingLeft: '15px', fontWeight: '500', fontFamily: 'sans-serif' }}>
			     Conscientiousness is a tendency to display self-discipline,
			     act dutifully, and strive for achievement against measures or 
			     outside expectations. It is related to the way in which people control, 
			     regulate, and direct their impulses.
			    </p>

			    <div className="col-md-6 d-flex align-items-stretch">
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>High Conscientiousness</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Spends time to be prepared</li>
			             <li style={{listStyleType: 'square'}}>Finishes important tasks rightly</li>
			             <li style={{listStyleType: 'square'}}>Pays attention to detail</li>
			             <li style={{listStyleType: 'square'}}>Enjoys having a set schedule</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			    <div className='col-md-6 d-flex align-items-stretch'>
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>Low Conscientiousness</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Makes messes and doesn't take care of things</li>
			             <li style={{listStyleType: 'square'}}>Fails to return things or put them back where they belong</li>
			             <li style={{listStyleType: 'square'}}>Procrastinates important tasks</li>
			             <li style={{listStyleType: 'square'}}>Fails to complete necessary or assigned tasks</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			  </div>


			  <div className="row">
			    <h3 className="headH">Extraversion</h3><b className="headB">(outgoing/energetic vs. solitary/reserved)</b>
			    <p style={{ paddingLeft: '15px', fontWeight: '500', fontFamily: 'sans-serif' }}>
			     Extraversion is characterized by breadth of activities (as opposed to depth), 
			     surgency from external activity/situations, and energy creation from external 
			     means. The trait is marked by pronounced engagement with the external world. 
			     Extraverts enjoy interacting with people, and are often perceived as full of 
			     energy. They tend to be enthusiastic, action-oriented individuals. They possess 
			     high group visibility, like to talk, and assert themselves. Extraverted people 
			     may appear more dominant in social settings, as opposed to introverted people in 
			     this setting.
			    </p>

			    <div className="col-md-6 d-flex align-items-stretch">
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>High Extraversion</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Enjoys being the center of attention</li>
			             <li style={{listStyleType: 'square'}}>Likes to start conversations</li>
			             <li style={{listStyleType: 'square'}}>Enjoys meeting new people</li>
			             <li style={{listStyleType: 'square'}}>Has a wide social circle of friends and acquaintances</li>
			             <li style={{listStyleType: 'square'}}>Finds it easy to make new friends</li>
			             <li style={{listStyleType: 'square'}}>Say things before thinking about them</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			    <div className='col-md-6 d-flex align-items-stretch'>
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>Low Extraversion</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Prefers solitude</li>
			             <li style={{listStyleType: 'square'}}>Feels exhausted when having to socialize a lot</li>
			             <li style={{listStyleType: 'square'}}>Finds it difficult to start conversations</li>
			             <li style={{listStyleType: 'square'}}>Dislikes making small talk</li>
			             <li style={{listStyleType: 'square'}}>Carefully thinks things through before speaking</li>
			             <li style={{listStyleType: 'square'}}>Dislikes being the center of attention</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			  </div>


			  <div className="row">
			    <h3 className="headH">Agreeableness</h3><b className="headB">(friendly/compassionate vs. challenging/callous)</b>
			    <p style={{ paddingLeft: '15px', fontWeight: '500', fontFamily: 'sans-serif' }}>
			     The agreeableness trait reflects individual differences in general 
			     concern for social harmony. Agreeable individuals value getting along 
			     with others. They are generally considerate, kind, generous, trusting and 
			     trustworthy, helpful, and willing to compromise their interests with others.
			      Agreeable people also have an optimistic view of human nature.

                    Disagreeable individuals place self-interest above getting along
                     with others. They are generally unconcerned with others' 
                     well-being, and are less likely to extend themselves for 
                     other people. Sometimes their skepticism about others' 
                     motives causes them to be suspicious, unfriendly, and 
                     uncooperative. Low agreeableness personalities are often 
                     competitive or challenging people, which can be seen as 
                     argumentative or untrustworthy.
			    </p>

			    <div className="col-md-6 d-flex align-items-stretch">
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>High Agreeableness</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Has a great deal of interest in other people</li>
			             <li style={{listStyleType: 'square'}}>Cares about others</li>
			             <li style={{listStyleType: 'square'}}>Feels empathy and concern for other people</li>
			             <li style={{listStyleType: 'square'}}>Enjoys helping and contributing to the happiness of other people</li>
			             <li style={{listStyleType: 'square'}}>Assists others who are in need of help</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			    <div className='col-md-6 d-flex align-items-stretch'>
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>Low Agreeableness</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Takes little interest in others</li>
			             <li style={{listStyleType: 'square'}}>Doesn't care about how other people feel</li>
			             <li style={{listStyleType: 'square'}}>Has little interest in other people's problems</li>
			             <li style={{listStyleType: 'square'}}>Insults and belittles others</li>
			             <li style={{listStyleType: 'square'}}>Manipulates others to get what they want</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			  </div>


			  <div className="row">
			    <h3 className="headH">Neuroticism</h3><b className="headB">(sensitive/nervous vs. resilient/confident)</b>
			    <p style={{ paddingLeft: '15px', fontWeight: '500', fontFamily: 'sans-serif' }}>
			     Neuroticism is the tendency to experience negative emotions, such as anger, 
			     anxiety, or depression. It is sometimes called emotional instability, or 
			     s reversed and referred to as emotional stability. According to Eysenck's
			     (1967) theory of personality, neuroticism is interlinked with low tolerance 
			     for stress or aversive stimuli. Neuroticism is a classic temperament trait 
			     that has been studied in temperament research for decades, before it was 
			     adapted by the FFM. Those who score high in neuroticism are emotionally 
			     reactive and vulnerable to stress, also tending to be flippant in the way 
			     they express emotion.
			    </p>

			    <div className="col-md-6 d-flex align-items-stretch" style={{marginBottom: '20px'}}>
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>High Neuroticism</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Experiences a lot of stress</li>
			             <li style={{listStyleType: 'square'}}>Worries about many different things</li>
			             <li style={{listStyleType: 'square'}}>Gets upset easily</li>
			             <li style={{listStyleType: 'square'}}>Experiences dramatic shifts in mood</li>
			             <li style={{listStyleType: 'square'}}>Feels anxious</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			    <div className='col-md-6 d-flex align-items-stretch' style={{marginBottom: '20px'}}>
			       <div className="card" style={{backgroundColor: '#FBFBFD'}}>
			         <div className="card-body flex-fill">
			           <h5 className="card-title" style={{fontWeight: '650'}}>Low Neuroticism</h5>
			           <ul style={{ fontFamily: 'sans-serif' }}>
			             <li style={{listStyleType: 'square'}}>Emotionally stable</li>
			             <li style={{listStyleType: 'square'}}>Deals well with stress</li>
			             <li style={{listStyleType: 'square'}}>Rarely feels sad or depressed</li>
			             <li style={{listStyleType: 'square'}}>Doesn't worry much</li>
			           </ul>
			         </div>
			       </div>
			    </div>
			  </div>

			</div>
		)
	}
};

export default TraitsDescription;