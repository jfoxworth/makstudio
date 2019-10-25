<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instance extends Model
{


    /**
     * Get the builds for the instance.
     */
    public function builds()
    {
        return $this->hasMany('App\Build');
    }


}
