/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  lists: any;
  constructor(public route:Router) {
    this.lists = [
      {
        title: "Busy periods and etiquetee",
        Question1: " Many of those who have recently taken out a membership might find that they can’t get on the machine or bit of equipment they want to use, because it’s January and many gyms are at their busiest.Are there any particular times when they tend to be quieter?",
        Answer1: "‘Quiet times will most likely depend on your gym, what its opening hours are and who are the most regular users. Most gyms are busiest outside regular working hours, so if you go at lunchtime or immediately after work you'll find it very busy. Going very early in the morning or late at night can be quiet if you work regular hours. If you do shift work or are self-employed and able to go during the day, the mid-afternoons and mid-mornings can also be a little quieter.’",
        Question2: " If someone wants to use a machine which is in use by someone else, is there an etiquette they should follow if they want to use the machine after them?",
        Answer2: "‘Wait until the person using the machine has finished their set. Don't march over to them while they're exercising. I normally just ask how many sets they have left and if anyone is waiting after them. If no one else is waiting I just ask if they could let me know when they're done and then either use a nearby machine or the mats in the meantime.’"
      },

      {
        title: "Organising your workouts",
        Question1: " For someone new to exercise who is looking to improve their overall fitness, how would you split exercise sessions between cardio and weights? Is it better to do two cardio sessions and one weights session per week for instance? Or would you advise doing a mixture of the two in each session?",
        Answer1: " ‘Ideally to avoid overworking muscles you should split your cardio and strength training so you can focus on your individual goals for that session. If you're very new to exercise, however, then key factors in building a workout plan should be to focus on the time you have available, and building a plan that you find you can actually stick to. You can combine cardio and strength training in one session if it helps you manage your time; just make sure you don't compromise your form and cause injuries by over tiring.’",
        Question2: "Which cardio exercise would you advise for someone starting out? Should they be looking to increase the amount they do or go a little faster each time?",
        Answer2: "‘Running is a simple cardio exercise with not much specialist equipment needed past a pair of running shoes. It's also very easy to tailor to your fitness levels. You can combine running and walking, add faster sprints, or simply run faster, slower or further depending on your goals.’"
      },

      {
        title: "Lifting for beginners",
        Question1: " Which do you think is better for someone starting out at the gym: lifting machines or free weights?",
        Answer1: "‘If you've never used weights before then lifting machines are a safer way to start. The weights have a set range of movement which means you don't need to worry as much about your form and you are less likely to get injured.",
        Question2: "Should someone reinforce any part of their body with particular exercises before they start lifting weights?",
        Answer2: " ‘It really depends on how strong you are to start with. It is always good to have a strong core, and non-weighted core exercises* can help you achieve that; but using weights can also help you strengthen those muscles.’"
      },

      {
        title: "Membership",
        Question1: "How do I cancel my membership?",
        Answer1: "We hate to see you go! You will need to contact your club directly to cancel your membership. Feel free to call, email or walk in during staffed hours and your club will assist you in their cancellation process.",
        Question2: "Why was my membership transferred to another club without notifying me?",
        Answer2: "Because our clubs handle your accounts and billing,it's important to be sure you are being helped by the club that you are attending most often. An automatic transfer will occur if you attend a specific club more often than your home club.",
      },
      {
        title: "Fit Pass",
        Question1: "Q. I do not want to wait 7 - 10 days to receive my access card. Can I use the club before it arrives?",
        Answer1: "Check with the club you signed up with. Each club is individually owned and operated so it reserves the right to allow or deny early access. Please contact your specific club to review your options.",
        Question2: "When does my 30 days start?",
        Answer2: "Your 30 days start when your access card arrives in the mail. When you receive it, your card is fully activated and ready to use right away."
      },
      {
        title: "Miscellaneous",
        Question1: "Q. As a member, can I bring a friend or pay a small fee to bring a friend occasionally?",
        Answer1: "BFFs (or Best Fitness Friends as we call them!) are allowed, but due to safety reasons, we request that your friend speak with club staff to obtain a guest pass. You will be charged for unauthorized visitors.",
        Question2: "How can I update my card on file?",
        Answer2: "Your club is happy to help! To change your account information, please contact your local club during staffed hours."
      }

    ];
   }

  ngOnInit() {
  }
  openPage(page) {
    this.route.navigate(['faq-model', page]);

  }
}
