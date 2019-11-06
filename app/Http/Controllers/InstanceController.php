<?php

namespace App\Http\Controllers;

use App\Instance;
use App\Build;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\NewInstance;
use App\Events\NewBuild;


class InstanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index( $id )
    {
        return Instance::findOrFail( $id );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $thisData = $request['model'];

        $thisInstance = new Instance;
        $thisInstance->design_type = $thisData['build_num'];
        $thisInstance->user_id = Auth::id();
        $thisInstance->stage = 0;
        $thisInstance->save();

        event(new NewInstance($thisInstance));


		$thisBuild = new Build;
		$thisBuild->build_id = $thisData['build_id'];
		$thisBuild->instance_id = $thisInstance->id;
        $thisBuild->design_type = $thisData['build_num'];
		$thisBuild->build_data = json_encode($thisData['build_data']);
		$thisBuild->user_id = Auth::id();
		$thisBuild->save();

		event(new NewBuild($thisInstance, $thisBuild));


        return $thisInstance->id;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Instance  $instance
     * @return \Illuminate\Http\Response
     */
    public function show(Instance $instance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Instance  $instance
     * @return \Illuminate\Http\Response
     */
    public function edit(Instance $instance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Instance  $instance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Instance $instance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Instance  $instance
     * @return \Illuminate\Http\Response
     */
    public function destroy(Instance $instance)
    {
        //
    }
}
