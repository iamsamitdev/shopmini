from fastapi import APIRouter
from sqlalchemy import select

from app.core.deps import SessionDep
from app.models import Category
from app.schemas.category import CategoryOut

router = APIRouter(prefix="/api/categories", tags=["categories"])


@router.get("", response_model=list[CategoryOut])
def list_categories(db: SessionDep):
    return db.scalars(select(Category).order_by(Category.id)).all()