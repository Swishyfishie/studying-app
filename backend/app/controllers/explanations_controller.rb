class ExplanationsController < ApplicationController
  before_action :set_explanation, only: [:show, :update, :destroy]

  # GET /explanations
  def index
    @explanations = Explanation.all

    render json: @explanations
  end

  # GET /explanations/1
  def show
    render json: @explanation
  end

  # POST /explanations
  def create

    @explanation = Explanation.new(explanation_params)
    @explanation.user_id = 1
    if @explanation.save
      render json: @explanation, status: :created, location: @explanation
    else
      render json: @explanation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /explanations/1
  def update
    if @explanation.update(explanation_params)
      render json: @explanation
    else
      render json: @explanation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /explanations/1
  def destroy
    @explanation.destroy
    render json: @explanation
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_explanation
      @explanation = Explanation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def explanation_params
      params.require(:explanation).permit(:id, :description, :future_studies, :tag_list)
    end
end
