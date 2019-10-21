<?php

namespace App\Http\Controllers;

use App\Build;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


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
        $thisBuild->build_data = json_encode($thisData['build_data']);
        $thisBuild->user_id = Auth::id();
        $thisBuild->save();
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
        echo('Got here with '.$buildID);
		return Build::findOrFail($buildID);
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
