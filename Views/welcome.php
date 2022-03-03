<?php

include "../backend-assets.php";

$ApiCall = new ApiCall();?>
<pre>
<code>
    <?=var_dump(json_decode($ApiCall->setStringContent()))?>
</code>
</pre>


