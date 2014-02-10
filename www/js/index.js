/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Custom Routing
var AppRouter = Backbone.Router.extend({
    
    routes:{
        "":"index",
        "main":"main",
        "cmva":"cmva",
        "clubmusic":"clubmusic",
        "checkin":"checkin",
        "ezdrinking":"easydrinking"
    },

    initialize:function(){
       $('#Back').live('click', function(event){
           event.preventDefault();
           window.history.back();
       });
       this.firstpage = true;
    },
    
    index: function(){
        this.changePage(new IndexPage());
    },

    landing:function(){
           this.changePage(new LandingPage());
    },

    cmusic:function(){
	    this.changePage(new ClubPage());    
    },

    cmva:function(){
	    this.changePage(new CmvaPage());
    },

    edrinking:function(){
	    this.changePage(new EasyPage());
    },

    main:function(){
	    this.changePage(new MainPage());
        },

    checkin:function(){
	    this.changePage(new CheckinPage());
    }
});
