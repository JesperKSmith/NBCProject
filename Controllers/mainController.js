/**
 * Created by Jelle on 30-06-2016.
 */
angular.module("newsJS")
    .controller("mainCtrl", function($scope) {
            $scope.articleArray = [
                {
                    "headLine" : 'Wonderful Copenhagen 2011',
                    "date" : '23/1-2011',
                    "imagePath" : 'src/img/article1.png',
                    "content" : 'The aim is to understand the science' +
                    ' behind our sensory perceptions. And by stimulating' +
                    ' the senses we will improve our tasting skills. ' +
                    'Therefore the program will be a mix of aroma sessions,' +
                    ' basic taste theory...'
                },
                {
                    "headLine" : 'Nordic Barista Cup 2011 in Copenhagen',
                    "date" : '22/1-2011',
                    "imagePath" : 'src/img/article2.png',
                    "content" : 'Nordic Barista Cup 2011 will be held in' +
                    ' Copenhagen, Denmark. Dates: 25th - 27th August 2011. ' +
                    'The theme for the 2011 seminar is: SENSORY. ' +
                    'More information will follow on this page....'
                },
                {
                    "headLine" : '2010 Winners: Sweden',
                    "date" : '12/1-2011',
                    "imagePath" : 'src/img/article3.png',
                    "content" : 'Oh my goodness, the final night is here! ' +
                    'We are at the most incredible location in all of Oslo—well,' +
                    ' at least that is what I think, since I havent seen much' +
                    ' of anything else around here....'
                }
            ];
            $scope.quickMenuArray = [
                {
                    "headLine" : 'NBC Shop',
                    "content" : 'Your shopping cart is empty',
                    "link" : 'Visit the shop'
                },
                {
                    "headLine" : 'Next Event',
                    "content" : 'Nordic Barista Cup 2011 Copenhagen, Denmark' +
                    ' Dates : 25th - 27th August 2011 Theme : SENSORY',
                    "link" : 'Sign up now'
                }
            ];
            $scope.scoreboard = [ {
                "headLine" : 'Scoreboard',
                "content" : 'List of winners from past years',
                "line1" : '2011 - ? ',
                "line2" : '2010 - Sweden',
                "line3" : '2009	- Denmark',
                "line4" : '2007 - Sweden',
                "line5" : '2006 - Norway',
                "line6" : '2005	- Norway',
                "line7" : '2004 - Denmark',
                "link" : 'Visit scoreboard'
            }
            ];

            $scope.about = [
                {
                    "headLine" : 'About Nordic Barista Cup',
                    "subHeader" : 'The vision within the Nordic Barista Cup is:',
                    "quote" : '\"To create an environment in which knowledge about coffee and its sphere can be obtained\"',
                    "content" : '’...create an environment…’ Combined with personally absorption having the opportunity' +
                    ' to see and experience countries, people, traditions etc. will always serve as' +
                    ' a source of inspiration in our daily work. The organization behind the Nordic Barista Cup' +
                    ' see it as its main purpose to be a part of creating this forum in which people can meet,' +
                    ' bond and achieve further knowledge.'
                }
            ]
            $scope.contact = [
                {
                    "headLine" : 'Contact',
                    "companyName" : 'Nordic Barista Cup',
                    "streetName" : 'Amagertorv 13',
                    "postAndCity" : '1160 Copenhagen K',
                    "phone" : '+45 33 12 04 28',
                    "cvr" : 'CVR: 11427693',
                    "mail" : 'Email: bbrend@nordicbaristacup.com'
                }
            ]
        });