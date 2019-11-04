<!-- Bench Quote Modal -->
<div class="modal fade" 
	 id="backlitQuoteModal" 
	 tabindex="-1" 
	 role="dialog" 
	 aria-labelledby="exampleModalLabel" 
	 aria-hidden="true">

	<div class="modal-dialog" 
		 role="document"
		 style="min-width:600px">

		<div class="modal-content">

	  		<div class="modal-header btn-primary">

				<h5 class="modal-title btn-primary" id="exampleModalLabel">Finish Quote</h5>
		
				<button type="button" class="close btn-primary" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
	
			<div class="modal-body"
				 style="width:500px">
				
				<table class="modalTable center"
					   style="width:500px; margin-left:25px">

					<tr style="height:35px; border-bottom:1px solid #ccc; font-weight:bold">
						<th style="width:300px">Quantity</th>
						<th>Amount</th>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Length of Wall</td><td id="backlitLengthQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Height of Wall</td><td id="backlitWidthQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Logo</td><td id="backlitLogoQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Create Flat Area</td><td id="backlitFlatAreaQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Logo Scale</td><td id="backlitLogoScaleQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Logo Z Location</td><td id="backlitLogoZQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Logo X</td><td id="backlitLogoXQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Wall Roughness</td><td id="backlitWallRoughQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Wave Amplitude</td><td id="backlitWaveAmpQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Wave Depth</td><td id="backlitWaveDepthQuote"></td>
					</tr>

					<tr style="height:30px; background-color:#888; color:#fff">
						<td>Price</td><td id="backlitModalPriceQuote"></td>
					</tr>

				</table>

			</div>

			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Send Me Quote</button>
			</div>
	
		</div>
	
	</div>

</div>
