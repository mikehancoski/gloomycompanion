
/* Macros used in card text, alphabetical order */
MACROS =
    { "%attack%":       "<span class='nobr'>Attack <img class='icon' src='images/attack.svg'></span>"
    , "%bless%":        "<span class='nobr'>BLESS <img class='icon' src='images/bless.svg'></span>"
    , "%curse%":        "<span class='nobr'>CURSE <img class='icon' src='images/curse.svg'></span>"
    , "%disarm%":       "<span class='nobr'>DISARM <img class='icon' src='images/disarm.svg'></span>"
    , "%heal%":         "<span class='nobr'>Heal <img class='icon' src='images/heal.svg'></span>"
    , "%immobilize%":   "<span class='nobr'>IMMOBILIZE <img class='icon' src='images/immobilize.svg'></span>"
    , "%jump%":         "<span class='nobr'>Jump <img class='icon' src='images/jump.svg'></span>"
    , "%move%":         "<span class='nobr'>Move <img class='icon' src='images/move.svg'></span>"
    , "%muddle%":       "<span class='nobr'>MUDDLE <img class='icon' src='images/muddle.svg'></span>"
    , "%loot%":         "<span class='nobr'>Loot <img class='icon' src='images/loot.svg'></span>"
    , "%pierce%":       "<span class='nobr'>PIERCE <img class='icon' src='images/pierce.svg'></span>"
    , "%poison%":       "<span class='nobr'>POISON <img class='icon' src='images/poison.svg'></span>"
    // This way to horizontally flip is ugly. Don't know a better one
    , "%pull%":         "<span class='nobr'>PULL <img class='icon' src='images/push.svg' style='transform:scale(-1,1); -webkit-transform:scale(-1,1); -moz-transform:scale(-1,1);  -o-transform:scale(-1,1)''></span>"
    , "%push%":         "<span class='nobr'>PUSH <img class='icon' src='images/push.svg'></span>"
    , "%range%":        "<span class='nobr'>Range <img class='icon' src='images/range.svg'></span>"
    , "%retaliate%":    "<span class='nobr'>Retaliate <img class='icon' src='images/retaliate.svg'></span>"
    , "%shield%":       "<span class='nobr'>Shield <img class='icon' src='images/shield.svg'></span>"
    , "%strengthen%":   "<span class='nobr'>STRENGTHEN <img class='icon' src='images/strengthen.svg'></span>"
    , "%target%":       "<span class='nobr'>Target <img class='icon' src='images/target.svg'></span>"
    , "%wound%":        "<span class='nobr'>WOUND <img class='icon' src='images/wound.svg'></span>"
    };
// TODO: Missing macros:
// Way to overlap use_element with the element itself

function expand_macro(macro)
{
    var key = macro.toLowerCase();
    if (key in MACROS)
    {
        return MACROS[key];
    }
    else
    {
        return macro;
    }
}

function expand_string(s)
{
    return s.replace(/%[^%]*%/gi, expand_macro);
}
