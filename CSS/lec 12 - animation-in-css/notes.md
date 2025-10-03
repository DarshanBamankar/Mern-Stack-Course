Animation - Transforming a element from one style to other style to create a illusion of animation.

To create animations in css we use keyframes - 


Syntax - 

@keyframes identifier(name){
    from{
        //previous style
    }
    to{
        //new style
    }
}

EX -

@keyframes color {
    from{
        background-color: grey;
    }
    to{
        background-color: red;
    }
}


identifier name is declared in the animation-name property.

properties - 

1) animation-duration -> the duration in which the animation takes place.

