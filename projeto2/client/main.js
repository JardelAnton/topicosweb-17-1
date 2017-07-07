import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/banco.js';


import './main.html';

Template.body.events({
	'click #mostra_janela': function(e){
		$("#modal_form").modal('show');
	}}
);

Template.meutemplate.events({
   'mouseenter .imagem_control': function(event){
       $(event.target).css("opacity","0.6");
   }, 
   'mouseleave .imagem_control': function(event){
       $(event.target).css("opacity","1");
   },
   'click #mostra_janela': function(e){
		$("#modal_form").modal('show');
	},
	'click #deleta_imagem': function(event){
        var image_id = this._id;
        $("#"+image_id).hide('slow', function(){
            Images.remove({"_id":image_id}); 
        });
    },
    'click #avalia_imagem': function(event) {
       var num_estrelas = $(event.currentTarget).data("userrating");
       console.log(num_estrelas);

    var image_id = this.image_id; //aqui, this se refere ao template que foi incluido
	Images.update({_id:image_id}, {$set: {stars: num_estrelas}});
   },
});

Template.meutemplate.helpers({meuarray:Images.find({}, {sort:{createdOn: -1}}),getUser: function(user_id) {
        var user = Meteor.users.findOne({_id: user_id});
        if(user){
            return user.username;
        }
        else {
            return "desconhecido";
        }
    },

});

Template.meutemplate1.events({
   'mouseenter .imagem_control': function(event){
       $(event.target).css("opacity","0.6");
   }, 
   'mouseleave .imagem_control': function(event){
       $(event.target).css("opacity","1");
   },
   'click #mostra_janela': function(e){
		$("#modal_form").modal('show');
	},
	'click #deleta_imagem': function(event){
        var image_id = this._id;
        $("#"+image_id).hide('slow', function(){
            Images.remove({"_id":image_id}); 
        });
    },
    'click #avalia_imagem': function(event) {
       var num_estrelas = $(event.currentTarget).data("userrating");
       console.log(num_estrelas);

    var image_id = this.image_id; //aqui, this se refere ao template que foi incluido
	Images1.update({_id:image_id}, {$set: {stars: num_estrelas}});
   },
});

Template.meutemplate1.helpers({meuarray1:Images1.find({}, {sort:{createdOn: -1}}),getUser: function(user_id) {
        var user = Meteor.users.findOne({_id: user_id});
        if(user){
            return user.username;
        }
        else {
            return "desconhecido";
        }
    },

});


Template.meutemplate2.events({
   'mouseenter .imagem_control': function(event){
       $(event.target).css("opacity","0.6");
   }, 
   'mouseleave .imagem_control': function(event){
       $(event.target).css("opacity","1");
   },
   'click #mostra_janela': function(e){
		$("#modal_form").modal('show');
	},
	'click #deleta_imagem': function(event){
        var image_id = this._id;
        $("#"+image_id).hide('slow', function(){
            Images.remove({"_id":image_id}); 
        });
    },
    'click #avalia_imagem': function(event) {
       var num_estrelas = $(event.currentTarget).data("userrating");
       console.log(num_estrelas);

    var image_id = this.image_id; //aqui, this se refere ao template que foi incluido
	Images2.update({_id:image_id}, {$set: {stars: num_estrelas}});
   },
});

Template.meutemplate2.helpers({meuarray2:Images2.find({}, {sort:{createdOn: -1}}),getUser: function(user_id) {
        var user = Meteor.users.findOne({_id: user_id});
        if(user){
            return user.username;
        }
        else {
            return "desconhecido";
        }
    },

});

Template.meutemplate3.events({
   'mouseenter .imagem_control': function(event){
       $(event.target).css("opacity","0.6");
   }, 
   'mouseleave .imagem_control': function(event){
       $(event.target).css("opacity","1");
   },
   'click #mostra_janela': function(e){
		$("#modal_form").modal('show');
	},
	'click #deleta_imagem': function(event){
        var image_id = this._id;
        $("#"+image_id).hide('slow', function(){
            Images.remove({"_id":image_id}); 
        });
    },
    'click #avalia_imagem': function(event) {
       var num_estrelas = $(event.currentTarget).data("userrating");
       console.log(num_estrelas);

    var image_id = this.image_id; //aqui, this se refere ao template que foi incluido
	Images3.update({_id:image_id}, {$set: {stars: num_estrelas}});
   },
});

Template.meutemplate3.helpers({meuarray3:Images3.find({}, {sort:{createdOn: -1}}),getUser: function(user_id) {
        var user = Meteor.users.findOne({_id: user_id});
        if(user){
            return user.username;
        }
        else {
            return "desconhecido";
        }
    },

});


Template.section1.helpers({teste1:logo.find()});

Template.janela_cadastro.events({
    'submit #form_cadastro': function(event){    		
    		var src1 = event.target.src.value;
    		var title1 = event.target.title.value;
    		var descript1 = event.target.descript.value;
    		var author1 = event.target.author.value;
     		Images.insert({src: src1, title: title1, author: author1, descript: descript1, created: new Date(), createdBy:Meteor.user()._id}); 
     		event.preventDefault();
     		$("#modal_form").modal('hide');
   		 }
	});


Template.body.helpers({
usuario: function(){
	//Meteor.user().username;
           return Meteor.user().username;
    }
});

Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});



Template.meutemplate3.events({
    'submit #contact-form': function(event){    		
    		var name1 = event.target.name.value;
    		var email1 = event.target.email.value;
    		var subject1 = event.target.subject.value;
    		var descript1 = event.target.message.value;
     		Messages.insert({name: name1, email: email1, subject: subject1, descript: descript1, created: new Date(), createdBy:Meteor.user()._id}); 
   		 }
	});



//db.logo.insert({src:"images/bg3.jpg"}); 