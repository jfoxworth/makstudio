<?php

namespace App\Http\Controllers;

use App\Build;
use App\Instance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\NewBuild;


class BuildController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		return Build::where( 'user_id', '=', Auth::id() )->get();
	}


	/**
	 * Display the listing of recent resources.
	 *
	 * @param  \App\Build  $build
	 * @return \Illuminate\Http\Response
	 */
	public function indexAll( $offset )
	{
		return Build::orderBy('id', 'desc')->skip( $offset * 20 )->take(20)->get();
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

		$thisBuild = new Build;
		$thisBuild->build_id = $thisData['build_id'];
		$thisBuild->instance_id = $thisData['instance_id'];
		$thisBuild->build_data = json_encode($thisData['build_data']);
        $thisBuild->design_type = $thisData['build_num'];
		$thisBuild->user_id = Auth::id();
		$thisBuild->save();

		$thisInstance = Instance::findOrFail($thisBuild->instance_id);
		event(new NewBuild($thisInstance, $thisBuild));

		return $thisBuild;

	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Build  $build
	 * @return \Illuminate\Http\Response
	 */
	public function show(Build $build)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Build  $build
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Build $build)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Build  $build
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Build $build)
	{
		$thisData = $request['model'];
		$thisBuild = Build::findOrFail($thisData['id']);
		$thisBuild['build_data'] = json_encode($thisData['build_data']);
	}



	/**
	 * Pull all of the data for one build
	 *
	 * @param  \App\Build  $build
	 * @return \Illuminate\Http\Response
	 */
	public function buildData($buildID)
	{
		return Build::findOrFail($buildID);
	}





	/**
	 * Get builds for an instance
	 *
	 * @param  \App\Build  $build
	 * @return \Illuminate\Http\Response
	 */
	public function getBuilds( $id )
	{
		return Build::where( 'instance_id', '=', $id )->get();
	}



	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function newBuild(Request $request)
	{

		$thisData = $request['model'];

		$thisBuild = new Build;
		$thisBuild->build_id = $thisData['build_id'];
		$thisBuild->instance_id = $thisData['instance_id'];
		$thisBuild->build_data = json_encode($thisData['build_data']);
        $thisBuild->design_type = $thisData['build_num'];
		$thisBuild->user_id = Auth::id();
		$thisBuild->save();

		$thisInstance = Instance::findOrFail($thisBuild->instance_id);
		event(new NewBuild($thisInstance, $thisBuild));

		return Build::where( 'instance_id', '=', $thisBuild->instance_id )->orderBy('created_at')->get();

	}



	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Build  $build
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		echo('Got here with '.$id);
		$thisBuild = Build::findOrFail($id);
		$thisBuild ->delete(); 
	}

}
